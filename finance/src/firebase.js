// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBuPgRmP_ODtBbrpBKxInN_1L_xoODG72c",
    authDomain: "finance-app-58668.firebaseapp.com",
    projectId: "finance-app-58668",
    storageBucket: "finance-app-58668.appspot.com",
    messagingSenderId: "520665902468",
    appId: "1:520665902468:web:9d1d00492fc591eca241d1",
    measurementId: "G-TM41H7Z0WP"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  // Use these for db & auth
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { auth, db };