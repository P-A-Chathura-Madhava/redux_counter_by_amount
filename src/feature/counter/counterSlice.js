import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    number: 0
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        add: (state, action) => {
            state.number += action.payload;
        },
        substract: (state, action) => {
            state.number -= action.payload;
        }
    }
})

export const {add, substract} = counterSlice.actions; 
export default counterSlice.reducer;