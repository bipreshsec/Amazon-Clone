 import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBsjzFONp9OkQqq6qUq_G_qdh1qBjME67A",
  authDomain: "clone-36a38.firebaseapp.com",
  databaseURL: "https://clone-36a38.firebaseio.com",
  projectId: "clone-36a38",
  storageBucket: "clone-36a38.appspot.com",
  messagingSenderId: "450280886253",
  appId: "1:450280886253:web:fad932f7c235c09b2ba1e4",
  measurementId: "G-0GJQJJFSF7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth};