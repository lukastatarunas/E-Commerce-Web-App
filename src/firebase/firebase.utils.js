import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDvNZVSlRzgLliqVnlMKHm8K1EYLKxIbO8",
    authDomain: "crown-db-127d9.firebaseapp.com",
    databaseURL: "https://crown-db-127d9.firebaseio.com",
    projectId: "crown-db-127d9",
    storageBucket: "crown-db-127d9.appspot.com",
    messagingSenderId: "341983740693",
    appId: "1:341983740693:web:2db80d8545f45729119f1c",
    measurementId: "G-H8SXPWV0H7"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;