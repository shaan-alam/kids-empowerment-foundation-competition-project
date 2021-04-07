import HeroImg from "../assets/images/hero__section.jpg";

const HeroSection = () => {
  return (
    <div className="hero__wrapper">
      <div className="container">
        <div className="hero__wrapperLeft">
          <h1>Kids Empowerment Foundation</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis,
            libero laborum. Ipsum culpa voluptates cumque, quam corporis id
            obcaecati expedita rem maiores, unde explicabo quaerat. Nisi
            cupiditate ex quam quas?
          </p>
          <div className="hero__cta">
            <a href="#!" className="primary__btn">
              Get Started
            </a>
            <a href="#!" className="secondary__btn">
              <i className="fa fa-play-circle" aria-hidden="true"></i> Play
              Video
            </a>
          </div>
        </div>
        <div className="hero__wrapperRight">
          <img src={HeroImg} alt="Boy in Yellow Dress" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
