import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faThumbsUp,
  faComment,
  faWindowClose,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";

import person from "../../assets/imgs/person.png";
import CommentList from "../commentList/";
import pic from "../../assets/imgs/pic.jpeg";
import { likePost } from "../../redux/post/action";
import AddComment from "../addComment/index";
import "./post.css";

const Post = ({ info }) => {
  const [commentOpen, setCommentOpen] = useState(false);

  const dispatch = useDispatch();

  const likeHandler = (id, like) => {
    dispatch(likePost(id, like));
  };

  const commentHandler = () => {
    setCommentOpen(true);
  };

  const close = () => {
    setCommentOpen(false);
  };

  return (
    <li className="post" key={info.id}>
      <div className="topRow">
        <div>
          <p className="userName">{info.userName}</p>
          <p className="time">{info.time}</p>
        </div>
        <img src={person} />
      </div>
      <div className="mainPart">
        <p>{info.text}</p>
        <img src={pic} />
      </div>
      <div className="bottomRow">
        <div className="likeCounter">
          <p>
            {info.like} <FontAwesomeIcon icon={faHeart} />
          </p>
        </div>
        <div className="reaction">
          <div onClick={commentHandler}>
            <p>نظر</p> <FontAwesomeIcon icon={faComment} />
          </div>
          <div onClick={() => likeHandler(info.id, info.like)}>
            <p>پسند</p>
            <FontAwesomeIcon icon={faThumbsUp} />
          </div>
        </div>
      </div>
      {commentOpen ? (
        <div className="overlay">
          <div className="close" onClick={close}>
              <FontAwesomeIcon icon={faWindowClose} />
          </div>

          <AddComment id={info.id} />
          <CommentList id={info.id} />
        </div>
      ) : null}
    </li>
  );
};
export default Post;
