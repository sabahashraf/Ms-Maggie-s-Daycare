// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBE7dAHf4h9OjlqwbpriT3JWCiRFjv41uQ",
  authDomain: "maggie-s-daycare.firebaseapp.com",
  projectId: "maggie-s-daycare",
  storageBucket: "maggie-s-daycare.appspot.com",
  messagingSenderId: "479721735660",
  appId: "1:479721735660:web:258d1b0e8387394d712cc9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
