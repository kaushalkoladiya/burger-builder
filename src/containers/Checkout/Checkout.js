import React from "react";

import { Route } from "react-router-dom";
import CheckoutSummary from "../../components/Order/ChekoutSummary/CheckoutSummary";
import OrderData from "./OrderData/OrderData";

const Checkout = (props) => {
  const confirmHandler = () => {
    props.history.replace("/checkout/order-data");
  };

  return (
    <div>
      <CheckoutSummary onConfirm={confirmHandler} />
      <Route
        path={props.match.url + "/order-data"}
        render={() => <OrderData />}
      />
    </div>
  );
};

export default Checkout;
