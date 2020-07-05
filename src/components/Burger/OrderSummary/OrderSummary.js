import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";
import { closeModal } from "../../../redux/action";

import Button from "../../UI/Button/Button";

const OrderSummary = ({ ingredients, totalPrice, closeModal, onContinue }) => {
  const ingredientsSummary = Object.keys(ingredients).map((igKey, key) => {
    return (
      <li key={key}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span> :{" "}
        {ingredients[igKey]}
      </li>
    );
  });
  return (
    <Fragment>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientsSummary}</ul>
      <p>
        <strong>Total Price : {totalPrice}</strong>
      </p>
      <p>Continue to checkout?</p>
      <Button onClick={closeModal} btnType="Danger">
        CANCEL
      </Button>
      <Button onClick={onContinue} btnType="Success">
        CONTINUE
      </Button>
    </Fragment>
  );
};

OrderSummary.propTypes = {
  ingredients: PropTypes.object.isRequired,
  totalPrice: PropTypes.number.isRequired,
  closeModal: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  ingredients: state.ingredients,
  totalPrice: state.totalPrice,
});

const mapActionToProps = {
  closeModal,
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(withRouter(OrderSummary));
