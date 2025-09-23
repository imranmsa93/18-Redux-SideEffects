import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import createSlice from "./cart-slice";

const store = configureStore({
    reducer:{
        ui:uiSlice.reducer,
        cart: createSlice.reducer,
    }
});

export default store;