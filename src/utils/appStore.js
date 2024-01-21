import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    // user: userReducer     //similarly other reducers can be added here
  },
});

export default appStore;