import React, { useEffect } from 'react';
import styles from './login.module.css';
import firebase from 'firebase/app';
import Header from '../header/header';
import Footer from '../footer/footer';
import { useHistory } from 'react-router';

const Login = ({ authService }) => {
  const history = useHistory(); //페이지 이동을 위한 hook
  const goToMaker = (userId) => {
    history.push({
      pathname: '/maker',
      state: {
        id: userId,
      },
    });
  };
  const onLogin = (e) => {
    authService
      .login(e.currentTarget.textContent) //
      .then((data) => goToMaker(data.user.uid));
  };

  //auto login
  useEffect(() => {
    authService //
      .onAuthChange((user) => {
        user && goToMaker(user.id);
      });
  });

  return (
    <section className={styles.login}>
      <Header />
      <section>
        <h1>Login</h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Google
            </button>
          </li>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Github
            </button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
