import { configureStore } from "@reduxjs/toolkit";
import bankSlice from "./bankSlice";
const store = configureStore({
    reducer: {
        count: bankSlice.reducer
    },
})

export default store