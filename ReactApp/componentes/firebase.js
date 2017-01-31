import * as firebase from 'firebase';

//Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBIKh2PIRO6K6m3n0nqobS8YaNICDuzveE",
  authDomain: "treinamentoreactnative.firebaseapp.com",
  databaseURL: "https://treinamentoreactnative.firebaseio.com",
  storageBucket: "treinamentoreactnative.appspot.com",
  messagingSenderId: "1004657471959"
 };

 exports.initialize = firebase.initializeApp(firebaseConfig);
