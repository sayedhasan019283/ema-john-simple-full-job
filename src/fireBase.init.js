// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCwSamaeirb-l-Ra0y7ISRP8fix63x8BZI",
    authDomain: "ema-john-simple-86f23.firebaseapp.com",
    projectId: "ema-john-simple-86f23",
    storageBucket: "ema-john-simple-86f23.appspot.com",
    messagingSenderId: "130747106060",
    appId: "1:130747106060:web:fad2677921c3892e13ff29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;