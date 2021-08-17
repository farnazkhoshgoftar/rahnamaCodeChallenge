import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

import smile from "../../assets/imgs/smile2.png";
import { addPost } from "../../redux/post/action";
import "./addPost.css";

const AddPost = () => {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();

  const [image, setImage] = useState({ preview: "", raw: "" });

  const handleChangeImg = (e) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };
  // const handleUploadImg = async (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("image", image.raw);

  //   await fetch("YOUR_URL", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //     },
  //     body: formData,
  //   });
  // };

  const notify = (message) => toast(message);
  const handleChange = (event) => {
    setInputText(event.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (inputText !== "") {
      //  add tag to redux
      const userName = localStorage.getItem("username");
      dispatch(addPost(inputText, userName));
      const postInfo = {
        userName: localStorage.getItem("username"),
        time: new Date().toLocaleDateString("fa-IR"),
        timeStamp: Date.now(),
        like: 0,
        text: inputText,
      };
      await axios.post("http://localhost:3000/addPost", postInfo);
      setInputText("");
    } else {
      notify("You should write text");
    }
  };

  return (
    <div className="addPostContainer">
      <div className="addPostContent">
        <div className="title">
          <p>ایجاد پست</p>
        </div>
        <div className="main">
          <form onSubmit={handleSubmit}>
            <div className="topRow">
              <label>
                <img src={smile} alt="smile" className="smile" />
              </label>
              <input
                value={inputText}
                onChange={handleChange}
                placeholder="در ذهنت چه می گذرد؟"
                className="message"
              />
              {image.preview ? (
                <img src={image.preview} alt="dummy" width="300" height="300" />
              ) : null}
            </div>

            <input
              type="file"
              id="upload-button"
              style={{ display: "none" }}
              onChange={handleChangeImg}
            />

            <div className="bottomRow">
              <label htmlFor="upload-button">
                <div className="image">
                  <FontAwesomeIcon icon={faImage} />
                  <p>عکس / ویدیو</p>
                </div>
              </label>
              <button type="submit">Post</button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddPost;
