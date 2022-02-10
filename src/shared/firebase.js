import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA5kpXOGvTYcnwgd0I_MdWGvRTBlgo-keI",
  authDomain: "image-community-22ea1.firebaseapp.com",
  projectId: "image-community-22ea1",
  storageBucket: "image-community-22ea1.appspot.com",
  messagingSenderId: "918993847676",
  appId: "1:918993847676:web:9087790a50764782ad90f9",
  measurementId: "G-0E8F1CSZK3"
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();

export{auth, apiKey, firestore, storage};