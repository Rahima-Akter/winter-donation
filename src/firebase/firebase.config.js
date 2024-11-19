// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAT8Wl0WvxzNqdMn6BJata5My2ucH_YZNk",
  authDomain: "b10-a9-79ef2.firebaseapp.com",
  projectId: "b10-a9-79ef2",
  storageBucket: "b10-a9-79ef2.firebasestorage.app",
  messagingSenderId: "416203109988",
  appId: "1:416203109988:web:78cde16772f891748c1171"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;