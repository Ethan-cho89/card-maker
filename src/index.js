import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import styles from './index.module.css';
import AuthService from './service/auth_service';

const authService = new AuthService();

ReactDOM.render(
  <React.StrictMode>
    <div className={styles.window}>
      <App authService = {authService}/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

