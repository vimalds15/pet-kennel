import { initializeApp } from 'firebase/app';
import {getAuth,createUserWithEmailAndPassword} from "firebase/auth"
// Optionally import the services that you want to use

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
const app = initializeApp(firebaseConfig);


const auth=getAuth();

// signup function
export const handleSignUp = async (email, password) => {
    await 
      createUserWithEmailAndPassword(auth,email, password)
      .then((userCredentials) => {
        console.log(userCredentials)
        // console.log(firebase.auth().currentUser);
        // const user = firebase.auth().currentUser;
        console.log(user.email)
      })
      .catch((error) => {
        console.error(error);
      });
  };

//   export const handleSignIn = async (email, password) => {
//     await firebase
//       .auth()
//       .signInWithEmailAndPassword(email, password)
//       .then(() => {
//         console.log(firebase.auth().currentUser);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   export const handleSignout = async () => {
//     await firebase
//       .auth()
//       .signOut()
//       .then(() => {
//         console.log("Signed Out");
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };