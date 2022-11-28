import "./login.scss";
import validate from "../../utils/validate"
import { toast } from "react-toastify"
import { useState } from "react";
import { loginApi } from "../../API/auth";
import { Link } from "react-router-dom";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate.ValidateMustNotEmpty(username)) {
          toast.error("Username must not be empty!");
          return;
        }
        if (!validate.ValidateMustNotEmpty(password)) {
          toast.error("Password must not be empty!");
          return;
        }
        
        try {
          const result = await loginApi({username, password});
          if (result && result.errCode === 0) {
            toast.success("Đăng kí thành công! Đăng nhập để tiếp tục.");
            // navigate("/login");
          }
          if (result && result.errCode !== 0) {
            toast.error(result.errMsg);
          }
          if (!result) {
            toast.error("Something wrong!");
          }
        }
        catch (err) {
          console.log("login err", err);
          toast.error("Something wrong!");

        }
    }
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input type="text" placeholder="Username" onChange={e => setUsername(e.target.value)}/>
          <input type="password" placeholder="Password" />
          <button type="submit" onSubmit={handleSubmit} className="loginButton" onChange={e => setPassword(e.target.value)}>Sign In</button>
          <span>
            New to Netflix? <b> <Link to="/register">Sign up now.</Link> </b>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  );
}
