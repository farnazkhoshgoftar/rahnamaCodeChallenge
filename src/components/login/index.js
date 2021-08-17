import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useHistory } from "react-router-dom";

import { request } from "../../utils/api";
import PageHOC from "../../page/pageHOC";
import "./login.css";

const Login = () => {
  const history = useHistory();

  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");

  const userNameChange = (event) => {
    setUserName(event.target.value);
  };

  const passWordChange = (event) => {
    setPassWord(event.target.value);
  };

  const checkUser = (serverUsers, formData) => {
    const user = serverUsers.find(
      (user) =>
        user.userName === formData.userName &&
        user.passWord === formData.passWord
    );
    if (user) return user;
  };
  const notify = (message) => toast(message);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userLogedIN = {
      userName: userName,
      passWord: passWord,
    };
    const user = await request
      .get("signup")
      .then((response) => checkUser(response, userLogedIN));

    if (user) {
      notify("You successfully logged in");
      localStorage.setItem("username", userLogedIN.userName);
      history.push("/");
    } else {
      notify("Username and password do not match");
    }
  };
  return (
    <PageHOC>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form onSubmit={handleSubmit}>
            <h3>Log In</h3>

            <div className="form-group">
              <label>username</label>
              <input
                defaultValue={userName}
                type="text"
                className="form-control"
                placeholder="user name"
                onChange={userNameChange}
              />
            </div>

            <div className="form-group">
              <label>password</label>
              <input
                defaultValue={passWord}
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={passWordChange}
              />
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              log in
            </button>
            <ToastContainer />
          </form>
        </div>
      </div>
    </PageHOC>
  );
};
export default Login;
