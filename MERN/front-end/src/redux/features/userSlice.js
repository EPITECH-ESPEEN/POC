import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isAuthenticated: false,
}

export const userSlice = createSlice({
    initialState,
    name: "UserSlice",
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
        },
        setIsAuthenticated(state, action) {
            state.isAuthenticated = action.payload;
        },
    },
});

export default userSlice.reducer;

export const { setUser, setIsAuthenticated } = userSlice.actions;