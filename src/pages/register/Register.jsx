/* eslint-disable no-unused-vars */
import { useRef } from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import validate from "../../utils/validate";
import "./register.scss";
import { toast } from "react-toastify";
import { registerApi } from "../../API/auth";

export default function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const usernameRef = useRef();
  const nameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };

  const handleFinish = async (e) => {
    e.preventDefault();
    setUsername(usernameRef.current.value);
    setName(nameRef.current.value);
    setPassword(passwordRef.current.value);

    if (!validate.ValidateNormalLetter(username)) {
      toast.error("Username not valid!");
      return;
    }
    if (!validate.ValidateMustNotEmpty(username)) {
      toast.error("Username must not be empty!");
      return;
    }

    if (!validate.ValidateNormalLetter(name)) {
      toast.error("Name not valid!");
      return;
    }
    if (!validate.ValidateMustNotEmpty(name)) {
      toast.error("Name must not be empty!");
      return;
    }

    if (!validate.ValidateMustNotEmpty(password)) {
      toast.error("Password must not be empty!");
      return;
    }

    if (!validate.ValidateMustNotEmpty(email)) {
      toast.error("Email not valid!");
      return;
    }
    if (!validate.ValidateEmail(email)) {
      toast.error("Email must not be empty!");
      return;
    }

    try {
      const result = await registerApi({ username, password, email, name });
      if (result && result.name === 0) {
        toast.success("Đăng kí thành công! Đăng nhập để tiếp tục.");
        navigate("/login");
      }
      if (result && result.name) {
        toast.error(result.message);
      }
      if (!result) {
        toast.error("Something wrong!");
      }
    } catch (err) {
      console.log("regiter err",err);
      toast.error("Something wrong!");
    }
  };
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <button className="login-button">
            <Link to="/login">Sign In</Link>
          </button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="email address" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="text" placeholder="Your username" ref={usernameRef} />
            <input type="text" placeholder="Your name" ref={nameRef} />
            <input type="password" placeholder="password" ref={passwordRef} />
            <button className="registerButton" onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
