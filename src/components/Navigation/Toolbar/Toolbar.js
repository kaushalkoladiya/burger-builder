import React from "react";

import styles from "./Toolbar.module.css";
import Logo from "../../UI/Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../Sidedrawer/DrawerToggle/DrawerToggle";

const Toolbar = (props) => (
  <header className={styles.Toolbar}>
    <DrawerToggle onClick={props.openSidedrawer} />
    <div style={{ height: "80%" }}>
      <Logo />
    </div>
    <nav className={styles.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default Toolbar;
