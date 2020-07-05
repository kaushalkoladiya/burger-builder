import React, { Fragment } from "react";

import styles from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";

const Modal = (props) => (
  <Fragment>
    <Backdrop show={props.show} onClick={props.closeModal} />
    <div
      style={{
        transform: props.show ? "traslateY(0)" : "translateY(-100)",
        opacity: props.show ? "1" : "0",
        display: props.show ? "block" : "none",
      }}
      className={styles.Modal}
    >
      {props.children}
    </div>
  </Fragment>
);

export default Modal;
