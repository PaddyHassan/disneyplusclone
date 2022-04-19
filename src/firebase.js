import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAYCAUbqYwIV2lissjCjf5jTtWqhi0O2TU",
  authDomain: "disneyplus-clone-d0b8e.firebaseapp.com",
  projectId: "disneyplus-clone-d0b8e",
  storageBucket: "disneyplus-clone-d0b8e.appspot.com",
  messagingSenderId: "99611218005",
  appId: "1:99611218005:web:b47e33a39e67bc4e3404dc",
  measurementId: "G-3Y9MJF1VNG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
