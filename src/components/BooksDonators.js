import { useEffect, useState } from "react";
import { db } from "../firebase";

const BooksDonators = () => {
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    db.collection("booksDonators")
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
            <td>No of books</td>
            <td>Reason</td>
          </tr>
        </thead>
        <tbody>
          {volunteers.map((volunteer) => (
            <tr>
              <td>{volunteer.name}</td>
              <td>{volunteer.email}</td>
              <td>{volunteer.numberOfBooks}</td>
              <td>{volunteer.reason}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BooksDonators;
