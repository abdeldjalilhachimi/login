var firebase = require('firebase/app');
const firebaseConfig = {
    apiKey: "AIzaSyA8ZK4cDgOc5htUYpUHaK4ZbFtOOI3FrAo",
    authDomain: "login-288f9.firebaseapp.com",
    projectId: "login-288f9",
    storageBucket: "login-288f9.appspot.com",
    messagingSenderId: "41418373706",
    appId: "1:41418373706:web:64753174e9a7d09f65c4b3"
  };
  
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  export default fire