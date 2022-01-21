import { createSlice } from "@reduxjs/toolkit";
import TokenService from "../../tokens/tokenService";
import { fetchUser } from "../thunks/user";

const initialState = {
    token: TokenService.getAccessToken(),
    status: "",
    data: TokenService.decodeAccessToken(TokenService.getAccessToken()),
    error: "",
}

export const userSlice = createSlice(
    {
        name: "user",
        initialState,
        reducers: {
            setAuth: (state, action) => {
                state.token = action.payload;
                state.data = TokenService.decodeAccessToken(action.payload);
            },
            removeAuth: (state) => {
                state.token = "";
                state.data = TokenService.decodeAccessToken(TokenService.getAccessToken());
            }
        },
        extraReducers: (builder) => {
            builder.addCase(fetchUser.pending,(state) => {
                state.status = "pending"
            })
            builder.addCase(fetchUser.fulfilled, (state,action) => {
                console.log(action.payload);
                state.status = "success";
                localStorage.setItem('accessToken', action.payload.accessToken);
                localStorage.setItem('refreshToken', action.payload.refreshToken);
                state.data = TokenService.decodeAccessToken(action.payload.accessToken);
                state.token = action.payload.accessToken;
            })
            builder.addCase(fetchUser.rejected,(state,action) => {
                state.status = "fail";
                state.error = action.payload;
            })
        }
    }
);

export const userActions = userSlice.actions;

export default userSlice.reducer;