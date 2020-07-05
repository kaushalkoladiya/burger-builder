import React from "react";

import NavigationItem from "./NavigationItem/NavigationItem";

import styles from "./NavigationItems.module.css";

const NavigationItems = (props) => (
  <ul className={styles.NavigationItems}>
    <NavigationItem link="/">BurgerBuilder</NavigationItem>
  </ul>
);

export default NavigationItems;
