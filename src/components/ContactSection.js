import { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import { db } from "../firebase";
import firebase from "firebase";
import { CircularProgress } from "@material-ui/core";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSuccessMsg("");
    }, 4000);
  }, [successMsg]);

  const handleForm = (e) => {
    e.preventDefault();

    setIsLoading(true);

    const data = {
      name,
      email,
      message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    };

    db.collection("contacts")
      .add(data)
      .then(() => {
        setSuccessMsg("Your email has been sent!!");

        setName("");
        setEmail("");
        setMessage("");
        setIsLoading(false);
      });
  };

  return (
    <div className="contact__wrapper">
      <div className="container">
        <Fade top>
          <h1>Contact Us</h1>
        </Fade>
        <form onSubmit={handleForm}>
          {successMsg && <small className="success__msg">{successMsg}</small>}
          <Fade top duration={2000}>
            <div className="form__field">
              <input
                type="text"
                placeholder="Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </Fade>
          <Fade top duration={2000} delay={200}>
            <div className="form__field">
              <input
                type="email"
                placeholder="Enail"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </Fade>
          <Fade top duration={2000} delay={400}>
            <div className="form__field">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                value={message}
                placeholder="Your message"
                required
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
          </Fade>
          <Fade top duration={2000} delay={500}>
            <button className="primary__btn">
              {isLoading ? (
                <CircularProgress color="inherit" size={20} />
              ) : (
                "Send"
              )}
            </button>
          </Fade>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
