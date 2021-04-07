import Fade from "react-reveal/Fade";

const ContactSection = () => {
  return (
    <div className="contact__wrapper">
      <div className="container">
        <Fade top>
          <h1>Contact Us</h1>
        </Fade>
        <form action="">
          <Fade top duration={2000}>
            <div className="form__field">
              <input type="text" placeholder="Name" />
            </div>
          </Fade>
          <Fade top duration={2000} delay={200}>
            <div className="form__field">
              <input type="number" placeholder="Phone" />
            </div>
          </Fade>
          <Fade top duration={2000} delay={400}>
            <div className="form__field">
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
          </Fade>
          <Fade top duration={2000} delay={500}>
            <button className="primary__btn">Send</button>
          </Fade>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
