import { useState, useEffect, useContext } from "react";
import Modal from "./Modal";
import { Context } from "../Context/GlobalState";
import { db } from "../firebase";
import { CircularProgress } from "@material-ui/core";

const BooksDonatingModal = ({ setBooksDonationModal }) => {
  const { user } = useContext(Context);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [reason, setReason] = useState("");
  const [numberOfBooks, setNumberOfBooks] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setSuccessMsg("");
    }, 4000);
  }, [successMsg]);

  useEffect(() => {
    if (user?.displayName && user?.email) {
      setName(user.displayName);
      setEmail(user.email);
    }
  }, [name, email, user.email, user.displayName]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);

    const donator = {
      name,
      email,
      address,
      numberOfBooks,
      reason,
    };

    // Save data to DB
    db.collection("booksDonators")
      .add(donator)
      .then(() => {
        setSuccessMsg(
          "You have been registered for Donating books. Check your email for further instructions."
        );

        setName("");
        setEmail("");
        setReason("");
        setNumberOfBooks(0);
        setAddress("");

        setIsLoading(false);
      });
  };

  return (
    <Modal>
      <div className="modal__content">
        <a
          href="#!"
          className="close__modal"
          onClick={() => setBooksDonationModal(false)}
        >
          &times;
        </a>
        <h2>Register for Donating Books</h2>

        {successMsg && <div className="success__msg">{successMsg}</div>}
        <form onSubmit={handleFormSubmit}>
          <div className="form__field">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form__field">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form__field">
            <input
              type="number"
              placeholder="Your Address"
              value={numberOfBooks}
              onChange={(e) => setNumberOfBooks(+e.target.value)}
              required
            />
          </div>
          <div className="form__field">
            <input
              type="text"
              placeholder="Your Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className="form__field">
            <textarea
              placeholder="Why do you want to donat books to our organisation?"
              name=""
              id=""
              cols="30"
              rows="5"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              required
            ></textarea>
          </div>
          <button className="primary__btn">
            {isLoading ? (
              <CircularProgress color="inherit" size={20} />
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default BooksDonatingModal;
