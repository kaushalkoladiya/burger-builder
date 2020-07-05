import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { openModal } from "../../../redux/action";

import styles from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const BuildControls = ({ price, purchasable, ingredients: ing, openModal }) => {
  const ingredients = Object.keys(ing);
  return (
    <div className={styles.BuildControls}>
      <p>
        Price: <strong>{price}</strong>
      </p>
      {ingredients.map((control, key) => (
        <BuildControl
          disabled={ing[control] > 0 ? false : true}
          key={key}
          type={control}
        />
      ))}
      <button
        disabled={!purchasable}
        className={styles.OrderButton}
        onClick={openModal}
      >
        ORDER NOW
      </button>
    </div>
  );
};

BuildControls.propTypes = {
  price: PropTypes.number.isRequired,
  purchasable: PropTypes.bool.isRequired,
  ingredients: PropTypes.object.isRequired,
  openModal: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  ingredients: state.ingredients,
  purchasable: state.purchasable,
  price: state.totalPrice,
});

const mapActionToProps = {
  openModal,
};

export default connect(mapStateToProps, mapActionToProps)(BuildControls);
