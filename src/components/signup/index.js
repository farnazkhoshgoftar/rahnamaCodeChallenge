import React, { useState } from "react";
// import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";

import PageHOC from "../../page/pageHOC";
import { request } from "../../utils/api";
import "./signup.css";

const SignUp = () => {
  const history = useHistory();

  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const [repeatPassWord, setRepeatPassWord] = useState("");

  const userNameChange = (event) => {
    setUserName(event.target.value);
  };
  const passWordChange = (event) => {
    setPassWord(event.target.value);
  };
  const repeatPassWordChange = (event) => {
    setRepeatPassWord(event.target.value);
  };

  const notify = (message) => toast(message);

  const checkUser = (serverUsers, formData) => {
    const user = serverUsers.find(
      (user) => user.userName === formData.userName
    );
    if (user) return user;
  };

  const validateSignUp = (user) => {
    if (!user.userName) return "ََUserName required";
    if (!user.passWord) return "Password required";
    if (user.passWord !== user.repeatPassWord) return "Password must be same";
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newUser = {
      userName: userName,
      passWord: passWord,
      repeatPassWord: repeatPassWord,
    };

    const error = validateSignUp(newUser);
    if (error) return notify(error);

    const serverUsers = await request
      .get("signup")
      .then((response) => checkUser(response, newUser));

    if (serverUsers) {
      notify("This username exists");
    } else if (userName.length <= 4) {
      notify("username must be more than 4 letters");
    } else {
      notify("You successfully registered");
      await request.post("signup", newUser);
      history.push("/");
      localStorage.setItem("username", newUser.userName);
      setUserName("");
      setPassWord("");
      setRepeatPassWord("");
    }
  };
  return (
    <PageHOC>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form onSubmit={handleSubmit}>
            <h3>Sign Up</h3>
            <div className="form-group">
              <label>username</label>
              <input
                value={userName}
                type="text"
                className="form-control"
                placeholder="user name"
                onChange={userNameChange}
              />
            </div>

            <div className="form-group">
              <label>password</label>
              <input
                value={passWord}
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={passWordChange}
              />
            </div>
            <div className="form-group">
              <label>repeat password</label>
              <input
                value={repeatPassWord}
                type="password"
                className="form-control"
                placeholder="Enter password again"
                onChange={repeatPassWordChange}
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Sign Up
            </button>
            <ToastContainer />
          </form>
        </div>
      </div>
    </PageHOC>
  );
};
export default SignUp;
