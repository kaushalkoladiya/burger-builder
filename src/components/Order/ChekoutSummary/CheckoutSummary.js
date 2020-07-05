import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";

import styles from "./CheckoutSummary.module.css";

const CheckoutSummary = (props) => {
  return (
    <div className={styles.CheckoutSummary}>
      <h1>We hope it testes well!</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger />
        <Button btnType="Danger" onClick={() => props.history.goBack()}>
          CANCEL
        </Button>
        <Button btnType="Success" onClick={props.onConfirm}>
          CONTINUE
        </Button>
      </div>
    </div>
  );
};

CheckoutSummary.propTypes = {
  onConfirm: PropTypes.func.isRequired,
};

export default withRouter(CheckoutSummary);
