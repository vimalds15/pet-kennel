import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyDauBoRV9Jwqo3P5P0luNb0bQ9C873QtPQ',
  authDomain: 'pet-kennel.firebaseapp.com',
//   databaseURL: 'https://project-id.firebaseio.com',
  projectId: "pet-kennel",
  storageBucket: "pet-kennel.appspot.com",
  messagingSenderId: "473035270284",
  appId: "1:473035270284:web:af881d60fed380aed4b3a9",
//   measurementId: 'G-measurement-id',
};


export const app = initializeApp(firebaseConfig);
