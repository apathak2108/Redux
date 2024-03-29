import { configureStore, compose } from "@reduxjs/toolkit";
import initialState from "./initialState";
import calculatorReducer from "./calculatorSlice";

const reducer = {
    calculator: calculatorReducer
}

export const store = configureStore({
    reducer: reducer,
    initialState
});

