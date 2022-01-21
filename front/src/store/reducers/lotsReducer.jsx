import { createSlice } from "@reduxjs/toolkit";
import { fetchLots } from "../thunks/lots";

const initialState = {
    status: "",
    lots: [],
    error: "",
}

export const lotsSlice = createSlice(
    {
        name: "lots",
        initialState,
        reducers: {
            setLectures: (state, action) => {
                state.lots = action.payload;
            }
        },
        extraReducers: (builder) => {
            builder.addCase(fetchLots.pending,(state) => {
                state.status = "pending"
            })
            builder.addCase(fetchLots.fulfilled,(state,action) => {
                state.status = "success";
                state.lots = action.payload.data;
            })
            builder.addCase(fetchLots.rejected,(state,action) => {
                state.status = "fail";
                state.error = action.payload;
            })
        }
    }
);

export const actionsLots = lotsSlice.actions;

export default lotsSlice.reducer;