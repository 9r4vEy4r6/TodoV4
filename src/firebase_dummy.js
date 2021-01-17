import firebase from "firebase";

const firebaseApp = firebase.initializeApp({      // contents of firebaseConfig
    apiKey: "xxxxxx",
    authDomain: "xxxxxx",
    projectId: "xxxxxx",
    storageBucket: "xxxxxx",
    messagingSenderId: "xxxxxx",
    appId: "xxxxxx",
    measurementId: "xxxxxx"
})

const db = firebaseApp.firestore();

export default db;