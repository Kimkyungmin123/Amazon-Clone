//import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDfWtjhk73UpvTm9pI6Lx_TMt54rePPeMc",
    authDomain: "clone-e1f74.firebaseapp.com",
    projectId: "clone-e1f74",
    storageBucket: "clone-e1f74.appspot.com",
    messagingSenderId: "790740591458",
    appId: "1:790740591458:web:47f4fca47725ea789d423b",
    measurementId: "G-M79FM7H70J"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};

