import { createSlice } from "@reduxjs/toolkit";
import { fetchLots } from "../thunks/lots";

const initialState = {
    status: "",
    lot: {},
    error: "",
}

export const lotSlice = createSlice(
    {
        name: "lots",
        initialState,
        reducers: {
            setLotBet: (state, action) => {
                state.lot.bets.unshift(action.payload);
            },
            setOneLot: (state, action) => {
                state.lot = action.payload;
            }
        },
        extraReducers: (builder) => {
            builder.addCase(fetchLots.pending, (state) => {
                state.status = "pending"
            })
            builder.addCase(fetchLots.fulfilled, (state, action) => {
                state.status = "success";
                state.lot = action.payload.data;
            })
            builder.addCase(fetchLots.rejected, (state, action) => {
                state.status = "fail";
                state.error = action.payload;
            })
        }
    }
);

export const actionsLot = lotSlice.actions;

export default lotSlice.reducer;