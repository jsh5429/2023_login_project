// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// 인증을 위한 getAuth가져오기
import {getAuth} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB4ifBJPP6y8TBlUDEQyDhq_QZ76Ozn2g4",
    authDomain: "login-project-32152.firebaseapp.com",
    projectId: "login-project-32152",
    storageBucket: "login-project-32152.appspot.com",
    messagingSenderId: "693397451804",
    appId: "1:693397451804:web:a3e62f6cb54fd28614dbd9"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
