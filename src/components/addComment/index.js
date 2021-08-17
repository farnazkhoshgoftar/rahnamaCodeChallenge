import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmileWink, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

import "./addComment.css";

const AddComment = ({ id }) => {
  const [inputText, setInputText] = useState("");

  const handleChange = (event) => {
    setInputText(event.target.value);
  };
  const notify = (message) => toast(message);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputText !== "") {
      const commentInfo = {
        userName: localStorage.getItem("username"),
        time: Date.now(),
        comment: inputText,
        postId: id,
      };

      await axios.post("http://localhost:3000/comment", commentInfo);
      setInputText("");
    } else {
      notify("You should write your comment");
    }
  };
  return (
    <div className="addComment">
      <form onSubmit={handleSubmit}>
        <input
          value={inputText}
          onChange={handleChange}
          placeholder="نظری بنویسید..."
          className="message"
        />
        <button type="submit">
          <FontAwesomeIcon icon={faPlusCircle} />
        </button>
      </form>
      <div className="icon">
        <FontAwesomeIcon icon={faSmileWink} />
      </div>
      <ToastContainer />
    </div>
  );
};
export default AddComment;
