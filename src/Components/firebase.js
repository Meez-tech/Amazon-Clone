import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "",
  authDomain: "clone-71046.firebaseapp.com",
  databaseURL: "https://clone-71046.firebaseio.com",
  projectId: "clone-71046",
  storageBucket: "clone-71046.appspot.com",
  messagingSenderId: "628003971220",
  appId: "1:628003971220:web:c51d3a1a595372ed535481",
  measurementId: "G-ES0GT53FMQ",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
