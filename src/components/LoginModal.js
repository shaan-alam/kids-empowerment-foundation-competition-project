import Modal from "./Modal";
import { GoogleLoginButton } from "react-social-login-buttons";

const LoginModal = ({ hideModal }) => {
  return (
    <Modal>
      <div className="modal__content">
        <a href="#!" onClick={hideModal} className="close__modal">
          &times;
        </a>
        <h1>Login</h1>
        <form action="">
          <div className="form__field">
            <input type="text" placeholder="Email" />
          </div>
          <div className="form__field">
            <input type="password" placeholder="Password" />
          </div>
          <button className="primary__btn">Login</button>
        </form>
        <div className="divider">OR</div>
        <GoogleLoginButton />
      </div>
    </Modal>
  );
};

export default LoginModal;
