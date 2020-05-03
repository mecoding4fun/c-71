import * as firebase from 'firebase'

require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBMT9yEcPHLomPVLfDyys1guWpwnl9oQ4s",
    authDomain: "bedtime-e1b44.firebaseapp.com",
    databaseURL: "https://bedtime-e1b44.firebaseio.com",
    projectId: "bedtime-e1b44",
    storageBucket: "bedtime-e1b44.appspot.com",
    messagingSenderId: "56722090905",
    appId: "1:56722090905:web:dadd17fbbda0a7b19d8108"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();