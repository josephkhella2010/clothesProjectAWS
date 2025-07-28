import { configureStore } from "@reduxjs/toolkit";
import UserSliceReducer from "../SliceReducers/UserReducer";
import ProductSliceReducer from "../SliceReducers/ProductReducer";

// Create Store
const store = configureStore({
  reducer: {
    UserDataStore: UserSliceReducer,
    ProductDataStore: ProductSliceReducer,
  },
});

// Run Saga
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
