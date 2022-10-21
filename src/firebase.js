import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBOcgGzDObSKlbKV0q3Z6P71QjdSreaz-Q",
    authDomain: "netflix-clone-10b81.firebaseapp.com",
    projectId: "netflix-clone-10b81",
    storageBucket: "netflix-clone-10b81.appspot.com",
    messagingSenderId: "679688312032",
    appId: "1:679688312032:web:3f4c51d5f76712316d2c85"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };