// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/storage"
import "firebase/compat/firestore";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyAapghXCnwN1UVYU2Mtx--PXZ4PCK5M7Yk",
  authDomain: "discord-clone-7dec1.firebaseapp.com",
  projectId: "discord-clone-7dec1",
  storageBucket: "discord-clone-7dec1.appspot.com",
  messagingSenderId: "165553525750",
  appId: "1:165553525750:web:6a46665b0a94d58ccfadd7",
  measurementId: "G-XRRE5D0EHF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;