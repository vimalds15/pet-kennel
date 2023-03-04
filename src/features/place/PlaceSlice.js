import { createSlice } from '@reduxjs/toolkit'
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase';

const initialState = {
    allPlaces:[],
    currentPlace:[]
}

const PlaceSlice = createSlice({
  name: "place",
  initialState,
  reducers: {
    setPlaces: (state,action) => {
        state.places = action.payload
    },
    setCurrentPlace: (state,action) => {
        state.currentPlace=action.payload
    }
  }
});

export const {setPlaces,setCurrentPlace} = PlaceSlice.actions

export const getAllPlaces = () => {
    return async (dispatch)=> {
        try{const placesDocRef= collection(db,"places");
        const placesDocSnapshot = await getDocs(placesDocRef)
        const places = placesDocSnapshot.docs.map(doc=> ({id:doc.id,...doc.data()}))
        dispatch(setPlaces(places))}
        catch(err){
            console.log("Error fetching places",err.message)
        }
    }
}

export const getPlaceById = (id) => {
    return async (dispatch)=> {
        try{
            const placeDocRef = doc(db,"places",id)
            const placeDocSnapshot = await getDoc(placeDocRef);
            const place = {id:placeDocSnapshot.id,...placeDocSnapshot.data()}
            dispatch(setCurrentPlace(place))
        }catch(err){
            console.log("error fetching place by id",err.message)
        }
    }
}

export default PlaceSlice.reducer