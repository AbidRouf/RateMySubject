// Import the functions you need from the SDKs you need
import { getApps, getApp, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAE7vbXDkwvpPhCeLD_eZWlNnSdjeSpvv4",
    authDomain: "rmss-93f4b.firebaseapp.com",
    projectId: "rmss-93f4b",
    storageBucket: "rmss-93f4b.appspot.com",
    messagingSenderId: "23041977201",
    appId: "1:23041977201:web:66a6a25c8fc84bae2024d0"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };