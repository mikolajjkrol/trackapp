import { configureStore } from "@reduxjs/toolkit";
import { uiSlice } from "./uiSlice";
import { dataSlice } from "./dataSlice";


export const store = configureStore({reducer: {ui: uiSlice.reducer, data: dataSlice.reducer}})