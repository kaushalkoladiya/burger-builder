import React, { Fragment } from "react";
import PropTypes from "prop-types";

import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

import { connect } from "react-redux";

import styles from "./Burger.module.css";

const Burger = ({ ingredients }) => {
  let trasformedIngredients = [];
  Object.keys(ingredients).map((key) => {
    for (let index = 0; index < Array(ingredients[key]).length; index++) {
      trasformedIngredients.push(key);
    }
    return true;
  });
  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top" />
      {trasformedIngredients.length > 0 ? (
        <Fragment>
          {trasformedIngredients.map((ig, key) => (
            <BurgerIngredient key={key} type={ig} />
          ))}
        </Fragment>
      ) : (
        <h5>Add ingredients please</h5>
      )}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

Burger.propTypes = {
  ingredients: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  ingredients: state.ingredients,
});

export default connect(mapStateToProps, null)(Burger);
