const ContactSection = () => {
  return (
    <div className="contact__wrapper">
      <div className="container">
        <h1>Contact Us</h1>
        <form action="">
          <div className="form__field">
            <input type="text" placeholder="Name" />
          </div>
          <div className="form__field">
            <input type="number" placeholder="Phone" />
          </div>
          <div className="form__field">
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
          <button className="primary__btn">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
