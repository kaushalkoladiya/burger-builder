import {
  ADD_INGREDIENTS,
  REMOVE_INGREDIENTS,
  PURCHASABLE,
  OPEN_MODAL,
  CLOSE_MODAL,
} from "./types";

const PRICE = {
  cheese: 15,
  bacon: 20,
  salad: 10,
  meat: 40,
};

const initalState = {
  ingredients: {
    salad: 0,
    cheese: 0,
    meat: 0,
    bacon: 0,
  },
  totalPrice: 25,
  purchasable: false,
  openModal: false,
  orderData: {
    name: "",
    email: "",
    address: {
      street: "",
      postelCode: "",
    },
  },
};

export default function (state = initalState, action) {
  switch (action.type) {
    case ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.payload.ingredientsType]:
            state.ingredients[action.payload.ingredientsType] + 1,
        },
        totalPrice: state.totalPrice + PRICE[action.payload.ingredientsType],
      };
    case REMOVE_INGREDIENTS:
      if (state.ingredients[action.payload.ingredientsType] === 0)
        return { ...state };
      else {
        return {
          ingredients: {
            ...state.ingredients,
            [action.payload.ingredientsType]:
              state.ingredients[action.payload.ingredientsType] - 1,
          },
          totalPrice: state.totalPrice - PRICE[action.payload.ingredientsType],
        };
      }
    case PURCHASABLE:
      const { cheese, bacon, salad, meat } = state.ingredients;
      let isPurchasable;
      if (cheese === 0 && bacon === 0 && salad === 0 && meat === 0) {
        isPurchasable = false;
      } else {
        isPurchasable = true;
      }
      return {
        ...state,
        purchasable: isPurchasable,
      };
    case OPEN_MODAL:
      return {
        ...state,
        openModal: true,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        openModal: false,
      };
    default:
      return state;
  }
}
