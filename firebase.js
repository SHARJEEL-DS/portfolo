import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBtaJcWm50RWbrBP84AyELyFBejuaRuZs0",
    authDomain: "profil-64a4d.firebaseapp.com",
    projectId: "profil-64a4d",
    storageBucket: "profil-64a4d.appspot.com",
    messagingSenderId: "443171133231",
    appId: "1:443171133231:web:c6614289112b367e77b3da"

};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const database = getFirestore();
const storage = getStorage();
// const storage = firebase.storage();

export {app, database }
