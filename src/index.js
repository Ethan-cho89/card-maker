import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './index.css';
import AuthService from './service/auth_service';

const authService = new AuthService();

ReactDOM.render(
  <React.StrictMode>
    <div >
      <App authService = {authService}/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

