import { getFirestore } from 'firebase/firestore';
import {initializeApp} from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAb0icTAHqAANG3EqwOiHV_8aOZvcPDoTQ",
    authDomain: "linked-in-ed09e.firebaseapp.com",
    projectId: "linked-in-ed09e",
    storageBucket: "linked-in-ed09e.appspot.com",
    messagingSenderId: "37662945087",
    appId: "1:37662945087:web:8d0d117fe535b930c8ad8a",
    measurementId: "G-EPXDNGLH9P"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore();
  const auth = getAuth();
  const create = createUserWithEmailAndPassword()
  export {db,auth,create};