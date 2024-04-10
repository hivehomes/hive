import { createSlice } from "@reduxjs/toolkit";
import { AuthUserData } from "@/lib/definitions";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState: AuthUserData | {} = {};

export const authUserDataSlice = createSlice({
    name: "authUserData",
    initialState,
    reducers: (create) => ({
        setUserData: (state, action: PayloadAction<AuthUserData>) => {
            return action.payload;
        }
    })
});

