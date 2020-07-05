import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import Button from "../../../components/UI/Button/Button";

import styles from "./OrderData.module.css";

const OrderData = (props) => {
  const orderHandler = (event) => {
    event.preventDefault();
    console.log(props);
    console.log(props.ingredients);
    // Send request to server
    alert("Thank You for Choosing our service!");
  };

  return (
    <div className={styles.OrderData}>
      <h4>Enter Your Contect Data</h4>
      <form>
        <input
          className={styles.Input}
          type="text"
          placeholder="Your Name"
          name="name"
        />
        <input
          className={styles.Input}
          type="email"
          placeholder="Your Email"
          name="email"
        />
        <input
          className={styles.Input}
          type="text"
          placeholder="Your Street"
          name="street"
        />
        <input
          className={styles.Input}
          type="text"
          placeholder="Your Postal Code"
          name="postalCode"
        />
        <Button btnType="Success" onClick={orderHandler}>
          Submit
        </Button>
      </form>
    </div>
  );
};

OrderData.propTypes = {
  ingredients: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  ingredients: state.ingredients,
});

export default connect(mapStateToProps, null)(OrderData);
