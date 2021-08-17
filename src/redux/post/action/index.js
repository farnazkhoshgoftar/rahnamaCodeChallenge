import axios from "axios";

import { GET_POST, ADD_POST, RESET_POSTS_LIST } from "./types";
import { request } from "../../../utils/api";

let nextId = 0;
export const addPost = (text, userName) => ({
  type: ADD_POST,
  payload: { id: nextId++, text, userName },
});

export const getPost = () => {
  return async (dispatch) => {
    request.get("addpost").then((response) => {
      dispatch({ type: GET_POST, payload: response });
    });
  };
};

export const likePost = (id, like) => {
  return (dispatch, getState) => {
    const posts = getState().posts;

    const updatePost = posts.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          like: item.like + 1,
        };
      } else {
        return item;
      }
    });
    dispatch({ type: GET_POST, payload: updatePost });

    let updateObject = { like: like + 1 };
    axios
      .patch(`http://localhost:3000/addpost/${id}`, updateObject)
      .then((res) => console.log(res))
      .catch((error) => {
        console.log(error);
      });
  };
};

export const resetPostsList = () => ({
  type: RESET_POSTS_LIST,
  payload: {},
});
