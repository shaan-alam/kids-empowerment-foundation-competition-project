const Footer = () => {
  return (
    <footer>
      <div className="container">
        <h1>Kids Empowerment Foundation</h1>

        <div className="footer__grid">
          <div className="footer__gridLeftContainer">
            <h4>EMAIL - test1234@gmail.com</h4>
            <h4>PHONE - 555 555 5555</h4>
            <h4>Connect with us on</h4>
            <a href="#!">
              <i className="fa fa-facebook-official" aria-hidden="true"></i>
            </a>
            <a href="#!">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
            <a href="#!">
              <i className="fa fa-youtube-play" aria-hidden="true"></i>
            </a>
            <a href="#!">
              <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
          </div>
          <div className="footer__gridRightContainer">
            <h4>Address</h4>
            <p>ABCD ROAD, PERSHING SQUARE, NEW YORK</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
