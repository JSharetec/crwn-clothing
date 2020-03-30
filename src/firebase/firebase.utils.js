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
  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth)
      return ;
  
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get();


   if(!snapShot.exists) {
     const {displayName, email} = userAuth;
     const createdAt = new Date();

     try {
       await userRef.set({
         displayName,
         email,
         createdAt, 
         ...additionalData
       })
     } catch (error) {
       console.log('error creation utilisateur ', error.message);
     }
   }
   return userRef;
  }

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
