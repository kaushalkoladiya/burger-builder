import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { closeModal } from "../../redux/action";

import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const BurgerBuilder = (props) => {
  const continuePurchaseHandler = () => {
    props.history.push("/checkout");
  };

  return (
    <Fragment>
      <Modal show={props.openModal} closeModal={props.closeModal}>
        {props.openModal && (
          <OrderSummary onContinue={continuePurchaseHandler} />
        )}
      </Modal>
      <Burger />
      <BuildControls />
    </Fragment>
  );
};

BurgerBuilder.propTypes = {
  openModal: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  openModal: state.openModal,
});

const mapActionToProps = {
  closeModal,
};

export default connect(mapStateToProps, mapActionToProps)(BurgerBuilder);
