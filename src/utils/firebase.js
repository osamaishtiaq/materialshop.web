import firebase from "firebase";

const config = {
    apiKey: "AIzaSyCm5RIRXz0-1i9RuEJnqCXdffOoTKGmjwY",
    authDomain: "materialhouse-d7ede.firebaseapp.com",
    databaseURL: "https://materialhouse-d7ede.firebaseio.com",
    projectId: "materialhouse-d7ede",
    storageBucket: "materialhouse-d7ede.appspot.com",
    messagingSenderId: "960819454695",
    appId: "1:960819454695:web:063a5be77f302cf7557842",
    measurementId: "G-ZMTCXHQNP6"
};

const firebaseApp = firebase.initializeApp(config);

const db = firebaseApp.firestore();

export { db };