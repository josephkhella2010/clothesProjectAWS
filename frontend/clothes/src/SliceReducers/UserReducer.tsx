import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { UserType } from "../helps/InterfacesType";

interface initialStateType {
  userData: UserType[];
}
const initialState: initialStateType = {
  userData: [],
};

const UserSlice = createSlice({
  name: "UserSlice",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserType>) => {
      state.userData.push(action.payload);
    },
  },
});
export const { setUserData } = UserSlice.actions;
export default UserSlice.reducer;
