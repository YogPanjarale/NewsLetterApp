 import firebase from 'firebase';
 var firebaseConfig = {
    apiKey: "AIzaSyC1WBLLOwD_R-zLiLBCIok6or3vNvX4tN0",
    authDomain: "newsletter-ec745.firebaseapp.com",
    databaseURL: "https://newsletter-ec745.firebaseio.com",
    projectId: "newsletter-ec745",
    storageBucket: "newsletter-ec745.appspot.com",
    messagingSenderId: "267049385109",
    appId: "1:267049385109:web:b082d94b3cdef7b010ef9c"
  };

 firebase.initializeApp(firebaseConfig);
export default firebase.database();