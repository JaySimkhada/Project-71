import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBtm8CUTR-fmZhRZcjdk2LTzk4lI7A8Nns",
    authDomain: "e-ride-60a9c.firebaseapp.com",
    projectId: "e-ride-60a9c",
    storageBucket: "e-ride-60a9c.appspot.com",
    messagingSenderId: "771818343956",
    appId: "1:771818343956:web:869f0b5d49885f4e21a101",
    measurementId: "G-30EGWTVKP3"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
