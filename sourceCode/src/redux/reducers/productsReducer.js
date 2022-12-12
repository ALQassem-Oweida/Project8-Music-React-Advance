import { ActionTypes } from "../constants/action-types";
const intialState = {
  songs: [],
};

const intialStatePosts = {
  posts: [],
};


export const songsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_SONGS:
      return { ...state, songs: payload };
    default:
      return state;
  }
};

export const setSearch = (state ="", { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_SEARCH:
      return { ...state, search: payload };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    default:
      return state;
  }
};


export const postsReducer = (state = intialStatePosts, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_POSTS:
      return { ...state, posts: payload };
    default:
      return state;
  }
};