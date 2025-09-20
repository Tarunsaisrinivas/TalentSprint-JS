import { createSlice, configureStore } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    value: "light",
  },
  reducers: {
    toggleTheme: (state) => {
      state.value = state.value === "light" ? "dark" : "light";
    },
    reset: (state) => {
      state.value = "light";
    },
  },
});

export const { toggleTheme, reset } = themeSlice.actions;

export const store = configureStore({
  reducer: themeSlice.reducer,
});

store.subscribe(() => console.log(store.getState()));

store.dispatch(toggleTheme());
store.dispatch(reset());
store.dispatch(toggleTheme());
store.dispatch(toggleTheme());
store.dispatch(toggleTheme());
