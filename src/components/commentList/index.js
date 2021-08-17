import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import "./commentList.css";
const CommentList = ({ id }) => {
  const [cmList, setCmList] = useState([]);

  const request = async () => {
    await axios
      .get(`http://localhost:3000/comment?postId=${id}`)
      .then((response) => setCmList(response.data));
  };
  useEffect(request, [cmList]);

  const sortCmList = cmList.sort((a, b) => b.time - a.time);

  return (
    <div>
      {cmList.length != 0
        ? sortCmList.map((item) => (
            <div key={item.id} className="cmContainer">
              <FontAwesomeIcon icon={faUser} />
              <div className="cmContent">
                <span className="name">{item.userName}</span>
                <p>{item.comment}</p>
              </div>
            </div>
          ))
        : null}
    </div>
  );
};
export default CommentList;
