import { createSlice } from "@reduxjs/toolkit";


const initialValue = {isCartVisible:false};
const uiSlice = createSlice({
    name:"uiSlice",
    initialState:initialValue,
    reducers:{
        toggle(state){
            state.isCartVisible = !state.isCartVisible;
        }
    }
});
export const uiActions = uiSlice.actions; 
export default uiSlice;