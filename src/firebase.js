import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwieFSVfKyZOaJr_r6JQIBo5GE9bBJu5I",
  authDomain: "kids-empowerment-foundation.firebaseapp.com",
  projectId: "kids-empowerment-foundation",
  storageBucket: "kids-empowerment-foundation.appspot.com",
  messagingSenderId: "627566589826",
  appId: "1:627566589826:web:292a39d791ae324fed019b",
  measurementId: "G-Z051XGZ9LY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const auth = firebaseApp.auth();
export const db = firebase.firestore();
