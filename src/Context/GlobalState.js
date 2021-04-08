import { createContext, useState, useEffect } from "react";
import { auth, db } from "../firebase";
import { useHistory } from "react-router-dom";

export const Context = createContext({});

export default function Provider({ children }) {
  const [user, setUser] = useState({});
  const [err, setError] = useState(null);
  const [isPageLoading, setIsPageLoading] = useState(false);

  const history = useHistory();

  useEffect(() => {
    setIsPageLoading(true);

    auth.onAuthStateChanged((user) => {
      console.log(user);

      if (user) {
        db.collection("users")
          .where("uid", "==", user.uid)
          .get()
          .then((snapshot) => {
            const user = snapshot.docs.map((doc) => ({ ...doc.data() }))[0];

            setUser(user);
          })
          .then(() => {
            setIsPageLoading(false);

            history.push("/");
          });
      } else {
        setIsPageLoading(false);
      }
    });
  }, [history]);

  // Login using email and password
  const login = (email, password, disableLoading) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        const user = {
          uid: result.user.uid,
          displayName: result.user.displayName,
          photoURL: result.user.photoURL,
          email: result.user.email,
        };

        // Saving data of the user in the database
        db.collection("users")
          .add(user)
          .then(() => {
            setUser(user);
          })
          .then(() => {
            disableLoading();
            history.push("/");
          });
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  };

  // Logout function
  const logout = (e) => {
    e.preventDefault();

    auth
      .signOut()
      .then(() => {
        setUser({});
      })
      .catch((err) => console.log(err.message));
  };

  const value = {
    user,
    setUser,
    login,
    err,
    logout,
    isPageLoading,
    setIsPageLoading,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}
