import { createSlice } from '@reduxjs/toolkit'
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../../firebase';

const initialState = {
  currentUser:[]
}

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state,action) => {
      state.currentUser = action.payload
    }
  }
});

export const {setCurrentUser} = UserSlice.actions

export const signIn = () => {
  return async(dispatch) => {
    try{
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth,provider);
      const user = result.user;
      const userData = {
        name:user.displayName,
        email:user.email,
        image:user.photoURL,
        id:user.uid,
        orders:[],
        phone:""
      }
      dispatch(setCurrentUser(userData));
      const userDocRef = doc(db,"user",user.uid)
      const userDocSnapshot = await getDoc(userDocRef);
      if(!userDocSnapshot.exists()){
        await setDoc(userDocRef,userData);
        console.log("New user added with ID: ",user.uid)
      }
    }catch(error){
      console.error(error.message)
    }
  }
}

export const logout = () => {
  return async (dispatch) => {
    try {
      await signOut(auth);
      dispatch(setCurrentUser(null))
    }catch(err){
      console.log("error logging out:",err.message)
    }
  }
}


export default UserSlice.reducer