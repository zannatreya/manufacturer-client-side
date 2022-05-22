// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBrrUrGyKKjlZEqEt0ejuBwH9odDyW5-RU",
    authDomain: "manufacturer-website-57646.firebaseapp.com",
    projectId: "manufacturer-website-57646",
    storageBucket: "manufacturer-website-57646.appspot.com",
    messagingSenderId: "102677099926",
    appId: "1:102677099926:web:2ddfbbae2b1034395dd9b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;