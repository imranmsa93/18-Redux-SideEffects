import { createSlice } from "@reduxjs/toolkit";


const initialValue = {isCartVisible:false, notification: null};
const uiSlice = createSlice({
    name:"uiSlice",
    initialState:initialValue,
    reducers:{
        toggle(state){
            state.isCartVisible = !state.isCartVisible;
        },
        showNotification(state, action){
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            }
        }
    }
});
export const uiActions = uiSlice.actions; 
export default uiSlice;