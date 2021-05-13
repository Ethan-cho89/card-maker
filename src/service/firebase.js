

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY_FIREBASE_APIKEY,
  authDomain:process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_DB_URL,
  appId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};
firebase.initializeApp(firebaseConfig);
