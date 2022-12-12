import { ActionTypes } from "../constants/action-types";

export const setSongs = (songs) => {
  return {
    type: ActionTypes.SET_SONGS,
    payload: songs,
  };
};

export const setSearch = (search) => {
  return {
    type: ActionTypes.SET_SEARCH,
    payload: search,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const setPosts = (posts) => {
  return {
    type: ActionTypes.SET_POSTS,
    payload: posts,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
