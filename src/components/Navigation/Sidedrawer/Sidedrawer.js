import React, { Fragment } from "react";
import Logo from "../../UI/Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";

import styles from "./Sidedrawer.module.css";

const Sidedrawer = (props) => {
  let classes = [styles.Sidedrawer, styles.Close];
  if (props.show) {
    classes = [styles.Sidedrawer, styles.Open];
  }
  return (
    <Fragment>
      <Backdrop show={props.show} onClick={props.closeDrawer} />
      <div className={classes.join(" ")}>
        <div style={{ height: "11%" }}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Fragment>
  );
};

export default Sidedrawer;
