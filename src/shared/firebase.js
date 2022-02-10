import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCMqJqzCsjLkn_rg8WrVb0zNtGZHw6P_Co",
  authDomain: "assignment-68260.firebaseapp.com",
  projectId: "assignment-68260",
  storageBucket: "assignment-68260.appspot.com",
  messagingSenderId: "25920061696",
  appId: "1:25920061696:web:2fa65a80ec9eb5c3dab3e5",
  measurementId: "G-M0FQTJ5WG1"
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();

export{auth, apiKey, firestore, storage};