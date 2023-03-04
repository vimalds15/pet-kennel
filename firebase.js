import { initializeApp } from 'firebase/app';
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// Optionally import the services that you want to use

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyDauBoRV9Jwqo3P5P0luNb0bQ9C873QtPQ',
  authDomain: 'pet-kennel.firebaseapp.com',
  projectId: "pet-kennel",
  storageBucket: "pet-kennel.appspot.com",
  messagingSenderId: "473035270284",
  appId: "1:473035270284:web:af881d60fed380aed4b3a9",
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth=getAuth(app);

