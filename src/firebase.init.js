// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVEhyTD8e-UZus72YMro6YAAgsgCB0sq0",
  authDomain: "new-motozone.firebaseapp.com",
  projectId: "new-motozone",
  storageBucket: "new-motozone.appspot.com",
  messagingSenderId: "414634301806",
  appId: "1:414634301806:web:c679db4b00492b1106897f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth