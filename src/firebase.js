import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8RSHlSjpVlb1kEISbVBZiuZFd9wH7SBk",
  authDomain: "kids-foundation-715b7.firebaseapp.com",
  projectId: "kids-foundation-715b7",
  storageBucket: "kids-foundation-715b7.appspot.com",
  messagingSenderId: "138761196208",
  appId: "1:138761196208:web:8f1ad1625e8a1116bf6175",
  measurementId: "G-EQEC0SC7RW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
