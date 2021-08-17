import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getPost, resetPostsList } from "../../redux/post/action";
import Post from "../post/index";
import "./postsList.css";

const PostsList = () => {
  const postList = useSelector((state) => state.posts);
  const sortPostList=postList.sort((a, b) => b.timeStamp - a.timeStamp)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost());

    return () => {
      dispatch(resetPostsList());
    };
  }, []);

  return (
    <>
      <ul className="postsList">
        {postList && sortPostList.map((post) => <Post key={post.id} info={post} />)}
      </ul>
    </>
  );
};

export default PostsList;
