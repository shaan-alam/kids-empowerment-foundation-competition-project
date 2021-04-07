import HeroImg from "../assets/images/hero__section.jpg";
import Fade from "react-reveal/Fade";

const HeroSection = () => {
  return (
    <div className="hero__wrapper">
      <div className="container">
        <div className="hero__wrapperLeft">
          <Fade top duration={2000}>
            <h1>Kids Empowerment Foundation</h1>
          </Fade>
          <Fade top duration={2000} delay={200}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Corporis, libero laborum. Ipsum culpa voluptates cumque, quam
              corporis id obcaecati expedita rem maiores, unde explicabo
              quaerat. Nisi cupiditate ex quam quas?
            </p>
          </Fade>
          <Fade top duration={2000} delay={400}>
            <div className="hero__cta">
              <a href="#!" className="primary__btn">
                Get Started
              </a>
              <a href="#!" className="secondary__btn">
                <i className="fa fa-play-circle" aria-hidden="true"></i> Play
                Video
              </a>
            </div>
          </Fade>
        </div>
        <div className="hero__wrapperRight">
          <Fade left duration={2000} delay={400}>
            <img src={HeroImg} alt="Boy in Yellow Dress" />
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
