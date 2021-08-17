import { GET_POST,LIKE_POST,ADD_POST,RESET_POSTS_LIST } from "../action/types";

export const posts = (state = [], action) => {
  switch (action.type) {
    case ADD_POST:
      return [
        ...state,
        {
          id: action.payload.id,
          userName: action.payload.userName,
          text: action.payload.text,
          time: new Date().toLocaleDateString("fa-IR"),
          timeStamp: Date.now(),
          userName: action.payload.userName,
          like: 0,
        },
      ];
    case GET_POST:
      return action.payload;

    case LIKE_POST:
      return state.map((item) => {
        if (action.payload.id === item.id) {
          return {
            ...item,
            like: action.payload.like++,
          };
        } else {
          return item;
        }
      });

    case RESET_POSTS_LIST:
      return [];

    default:
      return state;
  }
};
