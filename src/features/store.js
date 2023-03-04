import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./user/UserSlice";
import BookingSlice from "./order/BookingSlice";
import PlaceSlice from "./place/PlaceSlice";

export const store = configureStore({
    reducer:{
        user:UserSlice,
        booking:BookingSlice,
        place:PlaceSlice
    }
})