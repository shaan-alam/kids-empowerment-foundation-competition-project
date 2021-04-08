import { useEffect, useState } from "react";
import { db } from "../firebase";

const Contacts = () => {
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    db.collection("contacts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snap) => {
        setVolunteers(snap.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      });
  }, []);

  return (
    <div className="volunteers__wrapper">
      <h3>All users who used contact form</h3>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Message</td>
          </tr>
        </thead>
        <tbody>
          {volunteers.map((volunteer) => (
            <tr>
              <td>{volunteer.name}</td>
              <td>{volunteer.email}</td>
              <td>{volunteer.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contacts;
