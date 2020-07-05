import React from 'react';

import Image from '../../../assets/images/logo.png';

import styles from './Logo.module.css'

const Logo = props => (
  <div className={styles.Logo}>
    <img src={Image} alt="Burger" />
  </div>
)

export default Logo;