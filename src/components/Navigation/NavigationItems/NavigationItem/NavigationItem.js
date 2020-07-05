import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./NavigationItem.module.css";

const NavigationItem = (props) => (
  <li className={styles.NavigationItem}>
    <NavLink
      to={props.link}
      activeStyle={{
        backgroundColor: "#8f5c2c",
        borderBottom: "4px solid #40a4c8",
        color: "#ffffff",
      }}
      exact
    >
      {props.children}
    </NavLink>
  </li>
);

export default NavigationItem;
