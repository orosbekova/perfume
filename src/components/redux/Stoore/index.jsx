import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { ProductSlice } from "../CreateSlice";

const rootReducer = combineReducers({
    add: ProductSlice.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
});
