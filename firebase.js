// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'; //import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB96jGuCEQmFHRXXEJqhdjecJXbnRKbiHA",
  authDomain: "hspantryapp-9ebbf.firebaseapp.com",
  projectId: "hspantryapp-9ebbf",
  storageBucket: "hspantryapp-9ebbf.appspot.com",
  messagingSenderId: "544308266915",
  appId: "1:544308266915:web:9e796841e7269a5f527c16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export {app, firestore};