import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/instance";

export const fetchLots = createAsyncThunk(
    'lots',
    async (payload, {rejectWithValue}) => {
        try {
            return await api.get(payload);
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const fetchLot = createAsyncThunk(
    'lot',
    async (payload, {rejectWithValue}) => {
        try {
            return await api.get(payload);
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);