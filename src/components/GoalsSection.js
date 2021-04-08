import School from "../assets/images/school.svg";
import Books from "../assets/images/books.svg";
import Flag from "../assets/images/school.svg";
import Fade from "react-reveal/Fade";

const GoalsSection = () => {
  return (
    <div className="goals__wrapper">
      <Fade top duration={2000}>
        <h1>Our Goal</h1>
      </Fade>
      <div className="goals__grid">
        <Fade top duration={2000} delay={200}>
          <div className="goal">
            <img src={School} alt="School" />
            <h3>Education for Everyone</h3>
            <p>
              Our long-term goal is to let every child be exposed to learning
              and education. We have volunteers who are ready to help and teach
              rural area kids.
            </p>
          </div>
        </Fade>

        <Fade top duration={2000} delay={400}>
          <div className="goal">
            <img src={Books} alt="School" />
            <h3>Free Books to learn</h3>
            <p>
              We provide free books to rural area kids to learn and help them in
              their education. We also make sure they get best quality education
              possible.
            </p>
          </div>
        </Fade>
        <Fade top duration={2000} delay={600}>
          <div className="goal">
            <img src={Flag} alt="School" />
            <h3>Sense of Equality</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. A dolor
              provident ducimus quos animi error tempora velit, id at! Tempore
              earum omnis architecto vitae ratione deleniti id laborum
              doloremque temporibus.
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default GoalsSection;
