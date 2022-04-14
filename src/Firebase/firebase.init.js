import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase.config";

// Initialize Firebase
export const initializeFirebaseApp = initializeApp(firebaseConfig);
