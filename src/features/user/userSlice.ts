import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface UserState {
  value: string | null | undefined;
  package: string;
  status: "idle" | "loading" | "failed";
  paymentStatus: boolean;
}

const initialState: UserState = {
  value: null,
  package: "",
  status: "idle",
  paymentStatus: false,
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state, action: PayloadAction<string | null | undefined>) => {
      state.value = action.payload;
    },
    logOut: (state) => {
      state.value = null;
      state.package = "";
      state.paymentStatus = false;
    },
    getPackage: (state, action: PayloadAction<string>) => {
      state.package = action.payload;
    },
    paidStatus: (state) => {
      state.paymentStatus = true;
    },
  },
});

export const { getUser, getPackage, paidStatus, logOut } = UserSlice.actions;
export const selectUser = (state: RootState) => state.user.value;
export const selectPackage = (state: RootState) => state.user.package;
export const paymentDone = (state: RootState) => state.user.paymentStatus;
export default UserSlice.reducer;
