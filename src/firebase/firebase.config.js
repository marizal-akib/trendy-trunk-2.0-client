// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqG6KFrM66PGIWv0277_GJ1w3yx_OZyHo",
  authDomain: "trendy-trunk.firebaseapp.com",
  projectId: "trendy-trunk",
  storageBucket: "trendy-trunk.appspot.com",
  messagingSenderId: "383268612483",
  appId: "1:383268612483:web:09416265cfa01328766eb6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;