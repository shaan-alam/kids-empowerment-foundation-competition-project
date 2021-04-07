import School from "../assets/images/school.svg";
import Books from "../assets/images/books.svg";
import Flag from "../assets/images/school.svg";

const GoalsSection = () => {
  return (
    <div className="goals__wrapper">
      <h1>Our Goal</h1>
      <div className="goals__grid">
        <div className="goal">
          <img src={School} alt="School" />
          <h3>Education for Everyone</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. A dolor
            provident ducimus quos animi error tempora velit, id at! Tempore
            earum omnis architecto vitae ratione deleniti id laborum doloremque
            temporibus.
          </p>
        </div>

        <div className="goal">
          <img src={Books} alt="School" />
          <h3>Free Books to learn</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. A dolor
            provident ducimus quos animi error tempora velit, id at! Tempore
            earum omnis architecto vitae ratione deleniti id laborum doloremque
            temporibus.
          </p>
        </div>

        <div className="goal">
          <img src={Flag} alt="School" />
          <h3>Sense of Equality</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. A dolor
            provident ducimus quos animi error tempora velit, id at! Tempore
            earum omnis architecto vitae ratione deleniti id laborum doloremque
            temporibus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GoalsSection;
