import { useState, useEffect, useContext } from "react";
import Modal from "./Modal";
import { Context } from "../Context/GlobalState";
import { db } from "../firebase";
import { CircularProgress } from "@material-ui/core";

const VoulunteeringModal = ({ setVolunteer }) => {
  const { user } = useContext(Context);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState('Position A');
  const [reason, setReason] = useState("");
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
  }, [name, email]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);

    const volunteer = {
      name,
      email,
      position,
      reason,
    };

    // Save data to DB
    db.collection("volunteers")
      .add(volunteer)
      .then(() => {
        setSuccessMsg("You have been registered as a volunteer");

        setName("");
        setEmail("");
        setReason("");
        setPosition("");

        setIsLoading(false);
      });
  };

  return (
    <Modal>
      <div className="modal__content">
        <a
          href="#!"
          className="close__modal"
          onClick={() => setVolunteer(false)}
        >
          &times;
        </a>
        <h2>Register for volunteering</h2>

        {successMsg && <div className="success__msg">{successMsg}</div>}
        <form onSubmit={handleFormSubmit}>
          <div className="form__field">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form__field">
            <input
              type="text"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form__field">
            <select
              onChange={(e) => setPosition(e.target.value)}
              defaultValue="Position A"
            >
              <option value="Position A">Position A</option>
              <option value="Position B">Position B</option>
              <option value="Position C">Position C</option>
              <option value="Position D">Position D</option>
            </select>
          </div>
          <div className="form__field">
            <textarea
              placeholder="Why do you want to volunteer in our organisation?"
              name=""
              id=""
              cols="30"
              rows="10"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
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

export default VoulunteeringModal;
