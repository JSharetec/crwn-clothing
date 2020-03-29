import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDMWphCsBnm2yXzANabJxjLx-zyDmIrTJ4",
    authDomain: "sharetec-crwn-db.firebaseapp.com",
    databaseURL: "https://sharetec-crwn-db.firebaseio.com",
    projectId: "sharetec-crwn-db",
    storageBucket: "sharetec-crwn-db.appspot.com",
    messagingSenderId: "217319814814",
    appId: "1:217319814814:web:35011013ec13e265592d8f",
    measurementId: "G-P52LZ53H5Y"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
