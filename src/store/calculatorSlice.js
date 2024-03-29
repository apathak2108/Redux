import { createAction, createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";

export const calculatedSlice = createSlice({
    name: "calculator",
    initialState: initialState.calculator,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= state.value > 0 ? 1 : 0;
        }
    }
});

export const {
    increment,
    decrement
} = calculatedSlice.actions;
export default calculatedSlice.reducer;
