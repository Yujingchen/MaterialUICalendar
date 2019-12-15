import "firebase/app";
import "firebase/database";
import "firebase/auth";
import firebase from "firebase/app";
const config = {
    apiKey: "AIzaSyDDADcERdPvCYraLW9ZC7EXs-yfy-tAWJ4",
    authDomain: "trainingo-eebcd.firebaseapp.com",
    databaseURL: "https://trainingo-eebcd.firebaseio.com",
    projectId: "trainingo-eebcd",
    storageBucket: "trainingo-eebcd.appspot.com",
    messagingSenderId: "327691647457",
    appId: "1:327691647457:web:a4e2f72baba0b7cabfbaa0",
    measurementId: "G-L0ERZTVBLQ"
};
firebase.initializeApp(config);
// const firebaseDB = firebase.database();


// const rrfConfig = {
//     userProfile: "users",
//     useFirestoreForProfile: true //Firestore for Profile instead of Realtime DB
// };




// firebaseDB
//   .ref("matches")
//   .once("value")
//   .then(snapshot => {
//     console.log(snapshot.val());
//   });

export { firebase };
