import { createSlice, configureStore } from "@reduxjs/toolkit";

const bankSlice = createSlice({
    name: "bank",
    initialState: {
        balance: 1419,
    },
    reducers: {
        deposit: (state, action) => {
            state.balance += action.payload;
        },
        withdraw: (state, action) => {
            state.balance -= action.payload;
        },
        balance: (state) => {
           state.balance; 
        },
    },
});

export const { deposit, withdraw, balance } = bankSlice.actions;

export const store = configureStore({
    reducer: bankSlice.reducer,
});

store.subscribe(() => console.log(store.getState()));

store.dispatch(deposit(100));
store.dispatch(withdraw(50));
store.dispatch(balance());