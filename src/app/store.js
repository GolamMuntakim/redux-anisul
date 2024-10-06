import { configureStore } from "@reduxjs/toolkit";
import counterReducer  from "../features/counter/counterSlice";


// we will use here configure store 
const store = configureStore({
    reducer : {
        counter : counterReducer,
    },
});
export default store; 