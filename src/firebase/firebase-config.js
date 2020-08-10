import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBbpslB4ust5scIx4G-po5hS8ob9JwKcCk",
  authDomain: "react-app-pruebas.firebaseapp.com",
  databaseURL: "https://react-app-pruebas.firebaseio.com",
  projectId: "react-app-pruebas",
  storageBucket: "react-app-pruebas.appspot.com",
  messagingSenderId: "369508618314",
  appId: "1:369508618314:web:0c75fb1aa0dbfac67756b3",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
