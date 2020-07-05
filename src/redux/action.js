import {
  ADD_INGREDIENTS,
  REMOVE_INGREDIENTS,
  PURCHASABLE,
  CLOSE_MODAL,
  OPEN_MODAL,
} from "./types";

export const increaseIngredient = (ingType) => (dispatch) => {
  dispatch({ type: ADD_INGREDIENTS, payload: { ingredientsType: ingType } });
  dispatch({ type: PURCHASABLE });
};

export const decreaseIngredient = (ingType) => (dispatch) => {
  dispatch({ type: REMOVE_INGREDIENTS, payload: { ingredientsType: ingType } });
  dispatch({ type: PURCHASABLE });
};

export const closeModal = () => (dispatch) => {
  dispatch({ type: CLOSE_MODAL });
};

export const openModal = () => (dispatch) => {
  dispatch({ type: OPEN_MODAL });
};
