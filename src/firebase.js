import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/firebase-auth';
import 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1A6luvapvnP6m8Tyl_zb7gU9021QPWv8",
  authDomain: "shine-fashion-store.firebaseapp.com",
  databaseURL: "https://shine-fashion-store.firebaseio.com",
  projectId: "shine-fashion-store",
  storageBucket: "shine-fashion-store.appspot.com",
  messagingSenderId: "1078501496003",
  appId: "1:1078501496003:web:1ffb93185a97bd91defe76"
};

// Initialize Firebase
export const fb = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
