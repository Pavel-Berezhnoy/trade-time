import { createAsyncThunk } from "@reduxjs/toolkit";
import { userApi } from "../../api/userApi";

export const fetchUser = createAsyncThunk(
    'auth/login',
    async (payload, {rejectWithValue}) => {
        try {
            return await userApi.authentication(payload);
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const fetchRegister = createAsyncThunk(
    'auth/login',
    async (payload, {rejectWithValue}) => {
        try {
            return await userApi.registration(payload);
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);