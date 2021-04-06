import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyDvNZVSlRzgLliqVnlMKHm8K1EYLKxIbO8',
    authDomain: 'crown-db-127d9.firebaseapp.com',
    databaseURL: 'https://crown-db-127d9.firebaseio.com',
    projectId: 'crown-db-127d9',
    storageBucket: 'crown-db-127d9.appspot.com',
    messagingSenderId: '341983740693',
    appId: '1:341983740693:web:2db80d8545f45729119f1c',
    measurementId: 'G-H8SXPWV0H7',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            });
        } catch (error) {
            console.log('Error creating user!', error.message);
        }
    }

    return userRef;
};

export const addCollectionAndDocuments = (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
