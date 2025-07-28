import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { SingleUserType, UserType } from "../helps/InterfacesType";
const userFromStorage = localStorage.getItem("user");
const tokenFromStorage = localStorage.getItem("token");
interface initialStateType {
  userData: UserType[];
  singleUser: SingleUserType | null;
  token: string | null;
}
const initialState: initialStateType = {
  userData: [],
  singleUser: userFromStorage ? JSON.parse(userFromStorage) : null,
  token: tokenFromStorage || null,
};

const UserSlice = createSlice({
  name: "UserSlice",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserType>) => {
      state.userData.push(action.payload);
    },
    setUsersData: (state, action: PayloadAction<UserType[]>) => {
      state.userData = action.payload;
    },
    setToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
      if (action.payload) {
        localStorage.setItem("token", action.payload);
      } else {
        localStorage.removeItem("token");
      }
    },

    setSingleUser: (state, action: PayloadAction<SingleUserType | null>) => {
      state.singleUser = action.payload;
      if (action.payload) {
        localStorage.setItem("user", JSON.stringify(action.payload));
      } else {
        localStorage.removeItem("user");
      }
    },
    logoutUser: (state) => {
      state.singleUser = null;
      state.token = null;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
  },
});
export const {
  setUserData,
  setUsersData,
  setToken,
  setSingleUser,
  logoutUser,
} = UserSlice.actions;
export default UserSlice.reducer;
