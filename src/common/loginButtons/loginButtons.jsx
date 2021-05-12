import React from 'react';
import styles from './loginButtons.module.css';
import firebase from 'firebase/app';

const LoginButtons = (props) => {
  const googleProvider = () => {
    // [START auth_google_provider_create]
    var firebaseConfig = {
      apiKey: process.env.REACT_APP_API_KEY_FIREBASE_APIKEY,
      authDomain: 'card-maker-9f785.firebaseapp.com',
      projectId: 'card-maker-9f785',
      storageBucket: 'card-maker-9f785.appspot.com',
      messagingSenderId: '899425896703',
      appId: '1:899425896703:web:2a6a4ad08856602398a4ca',
      measurementId: 'G-DKTN1YB8RV',
    };
    firebase.initializeApp(firebaseConfig);
    var provider = new firebase.auth.GoogleAuthProvider();
    // [END auth_google_provider_create]

    // [START auth_google_provider_scopes]
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    // [END auth_google_provider_scopes]

    // [START auth_google_provider_params]
    provider.setCustomParameters({
      login_hint: 'user@example.com',
    });
    // [END auth_google_provider_params]
    return provider;
  };

  const googleSignInPopup = (provider) => {
    // [START auth_google_signin_popup]
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
    // [END auth_google_signin_popup]
  };

  const googleLogin = () => {
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional

    googleSignInPopup(googleProvider());
  };

  return (
    <div className={styles.loginBox}>
      <h2 className={styles.login}>Login</h2>
      <button
        className={styles.button}
        onClick={() => {
          googleLogin();
        }}
      >
        Google
      </button>
      <button className={styles.button}>Github</button>
    </div>
  );
};

export default LoginButtons;
