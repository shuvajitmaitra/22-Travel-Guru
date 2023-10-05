// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDpf6xDmjdwOa3jJNdH627hbqxzZ7qsEhI",
    authDomain: "tg-travel-guru.firebaseapp.com",
    projectId: "tg-travel-guru",
    storageBucket: "tg-travel-guru.appspot.com",
    messagingSenderId: "479337553085",
    appId: "1:479337553085:web:92482e7b3f393e54692bd4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;