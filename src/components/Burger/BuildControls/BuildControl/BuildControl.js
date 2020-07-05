import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import {
  increaseIngredient,
  decreaseIngredient,
} from "../../../../redux/action";

import styles from "./BuildControl.module.css";

const BuildControl = ({
  type,
  increaseIngredient,
  decreaseIngredient,
  disabled,
}) => (
  <div className={styles.BuildControl}>
    <div className={styles.Label}>{type}</div>
    <button
      disabled={disabled}
      onClick={() => {
        decreaseIngredient(type);
      }}
      className={styles.Less}
    >
      -
    </button>
    <button
      onClick={() => {
        increaseIngredient(type);
      }}
      className={styles.More}
    >
      +
    </button>
  </div>
);

BuildControl.propTypes = {
  increaseIngredient: PropTypes.func.isRequired,
  decreaseIngredient: PropTypes.func.isRequired,
};

const mapActionToProps = {
  increaseIngredient,
  decreaseIngredient,
};

export default connect(null, mapActionToProps)(BuildControl);
