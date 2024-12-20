// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
import {getAuth,setPersistence,browserLocalPersistence} from 'firebase/auth'
import page from '../lib/page.js';

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

export const auth  = getAuth(app);
export const database = getDatabase(app);
setPersistence(auth,browserLocalPersistence).then(() => {
  page.redirect(location.pathname)
}).catch(()=> {
  console.log("It does not persist");
})

export default app