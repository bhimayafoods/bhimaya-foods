import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Replace the following with your app's Firebase project configuration
// 1. Go to https://console.firebase.google.com/
// 2. Create a new project or select an existing one
// 3. Add a Web App to your project
// 4. Copy the firebaseConfig object below

const firebaseConfig = {
  apiKey: "AIzaSyDHvUupT76RnpUtei-LrzBpkS14cO0B4V8",
  authDomain: "bhimaya-foods.firebaseapp.com",
  projectId: "bhimaya-foods",
  storageBucket: "bhimaya-foods.firebasestorage.app",
  messagingSenderId: "462451570987",
  appId: "1:462451570987:web:337de5a630b974c2b2ad6e",
  measurementId: "G-R8005LCLHY"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);


