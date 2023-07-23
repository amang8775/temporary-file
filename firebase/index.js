import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAxU5cnIFRlJNCEerjNOv0m9DiI1QPc7P8",
  authDomain: "temporary-file-d74ca.firebaseapp.com",
  projectId: "temporary-file-d74ca",
  storageBucket: "temporary-file-d74ca.appspot.com",
  messagingSenderId: "623752506126",
  appId: "1:623752506126:web:9a06112c22dc8d9443455f",
  measurementId: "G-H008GH6GJ0"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
