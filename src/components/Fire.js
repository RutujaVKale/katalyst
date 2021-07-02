 import firebase from "firebase";
 //firebases configuration
 var firebaseConfig = {
    apiKey: "AIzaSyD7kfDf80jZOEJllnjcYGjPZcToAJQBcYk",
    authDomain: "katalyst-portal.firebaseapp.com",
    projectId: "katalyst-portal",
    storageBucket: "katalyst-portal.appspot.com",
    messagingSenderId: "650204678008",
    appId: "1:650204678008:web:261bf3c1b46a526d8b6a8d"
  };

  //initialising firebase
   const fire =  firebase.initializeApp(firebaseConfig);

   export default fire;