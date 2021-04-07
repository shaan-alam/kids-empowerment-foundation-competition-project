import Volunteering from "../assets/images/volunteering.jpg";
import Donation from "../assets/images/donation.jpg";
import Awareness from "../assets/images/awareness.jpg";

const HelpSection = () => {
  return (
    <div className="help__wrapper">
      <div className="container">
        <h1>How can you help us?</h1>
        <div className="help__block">
          <div className="help__blockLeftContainer text">
            <h1>Volunteering</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              modi nobis itaque! Modi quasi accusamus iste magni commodi
              voluptatibus aliquam accusantium totam eaque enim, doloribus
              obcaecati. Exercitationem maxime consequatur at.
            </p>
          </div>
          <div className="help__blockRightContainer">
            <img src={Volunteering} alt="Volunteering" />
          </div>
        </div>

        <div className="help__block">
          <div className="help__blockLeftContainer">
            <img src={Donation} alt="Donating books" />
          </div>
          <div className="help__blockRightContainer text">
            <h1>Donating books</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              modi nobis itaque! Modi quasi accusamus iste magni commodi
              voluptatibus aliquam accusantium totam eaque enim, doloribus
              obcaecati. Exercitationem maxime consequatur at.
            </p>
          </div>
        </div>

        <div className="help__block">
          <div className="help__blockLeftContainer text">
            <h1>Creating Awareness</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              modi nobis itaque! Modi quasi accusamus iste magni commodi
              voluptatibus aliquam accusantium totam eaque enim, doloribus
              obcaecati. Exercitationem maxime consequatur at.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
              quibusdam non, aut ratione dolorum ea ipsum perspiciatis nobis
              quidem quaerat eius totam obcaecati cum. Ipsa iure aperiam
              explicabo nihil quae!
            </p>
          </div>
          <div className="help__blockRightContainer">
            <img src={Awareness} alt="Creating awareness" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpSection;
