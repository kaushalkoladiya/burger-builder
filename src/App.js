import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

// Components
import Layout from "./components/Layout/Layout";

// Containers
import BurgerBuilder from "./containers/BurgerBilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";

import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/" exact component={BurgerBuilder} />
            {/* <Redirect to="/" /> */}{" "}
            {/* If Add this nested route won't work */}
          </Switch>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
