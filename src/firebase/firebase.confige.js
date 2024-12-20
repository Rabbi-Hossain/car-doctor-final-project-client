// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCz-MiciH5rIkg5hORkswP5cqurwD59LWw",
  authDomain: "car-doctor-final-project.firebaseapp.com",
  projectId: "car-doctor-final-project",
  storageBucket: "car-doctor-final-project.firebasestorage.app",
  messagingSenderId: "149190982054",
  appId: "1:149190982054:web:72db42d12a82734d3d3767"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app