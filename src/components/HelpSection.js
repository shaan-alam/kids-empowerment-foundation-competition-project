import { useState } from "react";
import Volunteering from "../assets/images/volunteering.jpg";
import Donation from "../assets/images/donation.jpg";
import Awareness from "../assets/images/awareness.jpg";
import Fade from "react-reveal/Fade";
import VoulunteeringModal from "./VolunteeringModal";
import BooksDonatingModal from "./BooksDonatingModal";

const HelpSection = () => {
  const [volunteer, setVolunteer] = useState(false);
  const [booksDonationModal, setBooksDonationModal] = useState(false);

  return (
    <div className="help__wrapper">
      <div className="container">
        <Fade top duration={2000}>
          <h1>How can you help us?</h1>
        </Fade>
        <div className="help__block">
          <div className="help__blockLeftContainer text">
            <Fade top duration={2000}>
              <h1>Volunteering</h1>
            </Fade>
            <Fade top duration={2000} delay={200}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                modi nobis itaque! Modi quasi accusamus iste magni commodi
                voluptatibus aliquam accusantium totam eaque enim, doloribus
                obcaecati. Exercitationem maxime consequatur at.
              </p>
            </Fade>
            <Fade top duration={2000} delay={250}>
              <a
                href="#!"
                className="help__button"
                onClick={() => setVolunteer(true)}
              >
                Click here to volunteer
              </a>
            </Fade>
            {volunteer && <VoulunteeringModal setVolunteer={setVolunteer} />}
          </div>
          <div className="help__blockRightContainer">
            <Fade left duration={2000} delay={400}>
              <img src={Volunteering} alt="Volunteering" />
            </Fade>
          </div>
        </div>

        <div className="help__block">
          <div className="help__blockLeftContainer">
            <Fade right duration={2000}>
              <img src={Donation} alt="Donating books" />
            </Fade>
          </div>
          <div className="help__blockRightContainer text">
            <Fade top duration={2000} delay={200}>
              <h1>Donating books</h1>
            </Fade>
            <Fade top duration={2000} delay={400}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                modi nobis itaque! Modi quasi accusamus iste magni commodi
                voluptatibus aliquam accusantium totam eaque enim, doloribus
                obcaecati. Exercitationem maxime consequatur at.
              </p>
            </Fade>
            <Fade top duration={2000} delay={250}>
              <a
                href="#!"
                className="help__button"
                onClick={() => setBooksDonationModal(true)}
              >
                Click here to donate books
              </a>
            </Fade>
            {booksDonationModal && (
              <BooksDonatingModal
                setBooksDonationModal={setBooksDonationModal}
              />
            )}
          </div>
        </div>

        <div className="help__block">
          <div className="help__blockLeftContainer text">
            <Fade top duration={2000}>
              <h1>Creating Awareness</h1>
            </Fade>
            <Fade top duration={2000} delay={200}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                modi nobis itaque! Modi quasi accusamus iste magni commodi
                voluptatibus aliquam accusantium totam eaque enim, doloribus
                obcaecati. Exercitationem maxime consequatur at.
              </p>
            </Fade>
            <Fade top duration={2000} delay={250}>
              <a href="#!" className="help__button">
                Join our Awareness program
              </a>
            </Fade>
          </div>
          <div className="help__blockRightContainer">
            <Fade left duration={2000} delay={400}>
              <img src={Awareness} alt="Creating awareness" />
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpSection;
