import React from 'react';
import styles from './header.module.css';

const Header = (props) => {
  return (
    <>
      <div className={styles.header}>
        <img src="../images/logo.png" alt="logo" className={styles.logoImg} />
        <h3 className={styles.title}>Business Card Maker</h3>
      </div>
    </>
  );
};

export default Header;
