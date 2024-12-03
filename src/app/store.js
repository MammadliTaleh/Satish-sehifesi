// store.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";  // Assuming you have a cartSlice

const store = configureStore({
  reducer: {
    cart: cartReducer,  // The cart slice reducer
  },
});

export default store;
