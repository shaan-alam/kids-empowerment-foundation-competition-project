import { useEffect, useState } from "react";
import { db } from "../firebase";

const Volunteers = () => {
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    db.collection("volunteers")
      .orderBy("timestamp", "desc")
      .onSnapshot((snap) => {
        setVolunteers(snap.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      });
  }, []);

  return (
    <div className="volunteers__wrapper">
      <h3>All Registered volunteers</h3>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Position for which they applied</td>
            <td>Reason</td>
          </tr>
        </thead>
        <tbody>
          {volunteers.map((volunteer) => (
            <tr>
              <td>{volunteer.name}</td>
              <td>{volunteer.email}</td>
              <td>{volunteer.position}</td>
              <td>{volunteer.reason}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Volunteers;
