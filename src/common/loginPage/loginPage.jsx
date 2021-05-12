import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import LoginButtons from '../loginButtons/loginButtons';
import styles from './loginPage.module.css';



const LoginPage = (props) => {
  return (
    <>
      <div className={styles.wrapper}>
        <Header />
        <LoginButtons />
        <Footer />
      </div>
    </>
  );
};

export default LoginPage;
