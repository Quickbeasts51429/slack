import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyCB5xl-LgSCRxv9_CISRXE6uwGMjmakjFw",
    authDomain: "slack-clone-a391b.firebaseapp.com",
    databaseURL: "https://slack-clone-a391b.firebaseio.com",
    projectId: "slack-clone-a391b",
    storageBucket: "slack-clone-a391b.appspot.com",
    messagingSenderId: "777639947452",
    appId: "1:777639947452:web:edaaa4d8cfdeaa21dbf4b9",
    measurementId: "G-6W99E6V3YP"
};
  firebase.initializeApp(firebaseConfig);
  
export default firebase;