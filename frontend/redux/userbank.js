import { createSlice, configureStore } from "@reduxjs/toolkit";

const userbankSlice = createSlice({
  name: "userbank",
  initialState: {
    users: {
      1: {
        name: "Rahul",
        balance: 100,
      },
      2: {
        name: "Raj",
        balance: 200,
      },
    },
  },
  reducers: {
    deposit: (state, action) => {
      state.users[action.payload.id].balance += action.payload.amount;
    },
    withdraw: (state, action) => {
      state.users[action.payload.id].balance -= action.payload.amount;
    },
  },
});

export const { deposit, withdraw } = userbankSlice.actions;

export const selectBalance = (state, userId) =>
  state.user.users[userId].balance;

export const store = configureStore({
  reducer: { user: userbankSlice.reducer },
});

store.subscribe(() => console.log(store.getState()));

store.dispatch(deposit({ id: 1, amount: 100 }));
store.dispatch(withdraw({ id: 2, amount: 50 }));

console.log("Rahul's Balance:", selectBalance(store.getState(), 1));
console.log("Raj's Balance:", selectBalance(store.getState(), 2));            
