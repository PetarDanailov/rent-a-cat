// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js'
;
// TODO: Add SDKs for Firebase products that you want to use
import {getAuth} from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js'

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkif2pg8em0fuRJ49GDE8ZF9MhMTrr5jw",
  authDomain: "rent-a-cat-da086.firebaseapp.com",
  projectId: "rent-a-cat-da086",
  storageBucket: "rent-a-cat-da086.firebasestorage.app",
  messagingSenderId: "97502682825",
  appId: "1:97502682825:web:3fef9ddb85ab31b53ff718"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth  = getAuth(app)
export default app