import Fade from "react-reveal/Fade";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <Fade top duration={2000}>
          <h1>Kids Empowerment Foundation</h1>
        </Fade>

        <div className="footer__grid">
          <div className="footer__gridLeftContainer">
            <Fade top duration={2000} delay={200}>
              <h4>EMAIL - test1234@gmail.com</h4>
            </Fade>
            <Fade top duration={2000} delay={400}>
              <h4>PHONE - 555 555 5555</h4>
            </Fade>
            <Fade top duration={2000} delay={600}>
              <h4>Connect with us on</h4>
            </Fade>
            <Fade top>
              <a href="#!">
                <i className="fa fa-facebook-official" aria-hidden="true"></i>
              </a>
            </Fade>
            <Fade top>
              <a href="#!">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </Fade>
            <Fade top>
              <a href="#!">
                <i className="fa fa-youtube-play" aria-hidden="true"></i>
              </a>
            </Fade>
            <Fade top>
              <a href="#!">
                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
              </a>
            </Fade>
          </div>
          <div className="footer__gridRightContainer">
            <Fade top duration={2000} delay={200}>
              <h4>Address</h4>
            </Fade>
            <Fade top duration={2000} delay={400}>
              <p>ABCD ROAD, PERSHING SQUARE, NEW YORK</p>
            </Fade>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
