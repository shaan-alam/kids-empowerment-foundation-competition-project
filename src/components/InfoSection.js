import Zach from "../assets/images/zach.jpg";
import Ben from "../assets/images/ben.jpg";
import BenWicks from "../assets/images/ben-wicks.jpg";
import Fade from "react-reveal/Fade";

const InfoSection = () => {
  return (
    <div className="info__wrapper">
      <div className="container">
        <div className="info">
          <div className="info__leftContainer text">
            <Fade top duration={2000}>
              <h1>Our History</h1>
            </Fade>
            <Fade top duration={2000} delay={200}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus ratione molestias labore saepe ab temporibus veritatis,
                tempore voluptatum praesentium quos.
              </p>
            </Fade>
          </div>
          <div className="info__rightContainer">
            <Fade left duration={2000} delay={400}>
              <img src={Zach} alt="Zach" />
            </Fade>
          </div>
        </div>

        <div className="info">
          <div className="info__leftContainer">
            <Fade right duration={2000}>
              <img src={Ben} alt="Ben" />
            </Fade>
          </div>
          <div className="info__rightContainer text">
            <Fade top duration={2000} delay={200}>
              <h1>Our Present</h1>
            </Fade>
            <Fade top duration={2000} delay={400}>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Reiciendis placeat laboriosam libero ipsum molestiae magni rerum
                nihil corporis, harum inventore.
              </p>
            </Fade>
          </div>
        </div>

        <div className="info">
          <div className="info__leftContainer text">
            <Fade top duration={2000}>
              <h1>Our Future</h1>
            </Fade>
            <Fade top duration={2000} delay={200}>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aliquid ipsam in provident consectetur placeat, molestiae
                aliquam quas similique iure reiciendis!
              </p>
            </Fade>
          </div>
          <div className="info__rightContainer">
            <Fade right duration={2000} delay={400}>
              <img src={BenWicks} alt="Ben Wicks" />
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
