import Zach from "../assets/images/zach.jpg";
import Ben from "../assets/images/ben.jpg";
import BenWicks from "../assets/images/ben-wicks.jpg";

const InfoSection = () => {
  return (
    <div className="info__wrapper">
      <div className="container">
        <div className="info">
          <div className="info__leftContainer text">
            <h1>Our History</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              ratione molestias labore saepe ab temporibus veritatis, tempore
              voluptatum praesentium quos.
            </p>
          </div>
          <div className="info__rightContainer">
            <img src={Zach} alt="Zach" />
          </div>
        </div>

        <div className="info">
          <div className="info__leftContainer">
            <img src={Ben} alt="Ben" />
          </div>
          <div className="info__rightContainer text">
            <h1>Our Present</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reiciendis placeat laboriosam libero ipsum molestiae magni rerum
              nihil corporis, harum inventore.
            </p>
          </div>
        </div>

        <div className="info">
          <div className="info__leftContainer text">
            <h1>Our Future</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              ipsam in provident consectetur placeat, molestiae aliquam quas
              similique iure reiciendis!
            </p>
          </div>
          <div className="info__rightContainer">
            <img src={BenWicks} alt="Ben Wicks" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
