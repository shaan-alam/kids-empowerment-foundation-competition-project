import { useState, useContext, useEffect } from "react";
import { GoogleLoginButton } from "react-social-login-buttons";
import { Context } from "../Context/GlobalState";
import { useHistory } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login, user, loginWithGoogle } = useContext(Context);

  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();

    setIsLoading(true);

    login(email, password, () => setIsLoading(false));
  };

  useEffect(() => {
    if (!user) {
      history.push("/");
    }
  }, [history, user]);

  return (
    <div className="login__wrapper">
      <div className="login__container">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div className="form__field">
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form__field">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="primary__btn">
            {isLoading ? (
              <CircularProgress color="inherit" size={20} />
            ) : (
              "Login"
            )}
          </button>
          {/* <small className="error">{}</small> */}
        </form>
        <div className="divider">OR</div>
        <GoogleLoginButton onClick={loginWithGoogle} />
      </div>
    </div>
  );
};

export default Login;
