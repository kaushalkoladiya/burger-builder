import React, { Component, Fragment } from "react";

import Toolbar from "../Navigation/Toolbar/Toolbar";

// Styles
import styles from "./Layout.module.css";
import Sidedrawer from "../Navigation/Sidedrawer/Sidedrawer";

class Layout extends Component {
  state = {
    showSidedrawer: false,
  };

  closeSidedrawerHandler = () => {
    this.setState({ showSidedrawer: false });
  };

  openSidedrawerHandler = () => {
    this.setState({ showSidedrawer: true });
  };

  render() {
    return (
      <Fragment>
        <Toolbar openSidedrawer={this.openSidedrawerHandler} />
        <Sidedrawer
          show={this.state.showSidedrawer}
          closeDrawer={this.closeSidedrawerHandler}
        />
        <main className={styles.main}>{this.props.children}</main>
      </Fragment>
    );
  }
}
export default Layout;
