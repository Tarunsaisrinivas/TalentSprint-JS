import { createSlice, configureStore } from "@reduxjs/toolkit";

const bankSlice = createSlice({
  name: "bank",
  initialState: {
    accounts: [],
  },
  reducers: {
    createAccount: (state, action) => {
      const { id, name, balance } = action.payload;
      state.accounts.push({ id, name, balance });
    },
    getAccountDetails: (state, action) => {
      const { id } = action.payload;
      const user = state.accounts.find((acc) => acc.id == id);
      if (!user) {
        console.log("No user found");
      }
      console.log(`${user.name} - ${user.balance}`);
    },
    getBalance: (state, action) => {
      const { id } = action.payload;
      const user = state.accounts.find((acc) => acc.id == id);
      if (!user) {
        console.log("No user found");
      }
      console.log(`${user.name}'s Account Balance is - ${user.balance}`);
    },
    deposit: (state, action) => {
      const { id, amount } = action.payload;
      const user = state.accounts.find((acc) => acc.id == id);
      if (user) {
        user.balance += amount;
      } else {
        console.log("No Account deatils found");
      }
    },
    withdraw: (state, action) => {
      const { id, amount } = action.payload;
      const user = state.accounts.find((acc) => acc.id == id);
      if (user && user.balance >= amount) {
        user.balance -= amount;
      } else if (user && user.balance < amount) {
        console.log("Insufficient funds");
      } else {
        console.log("No Account deatils found");
      }
    },
    transfer: (state, action) => {
        const { fromId, toId, amount } = action.payload;
        const fromUser = state.accounts.find((acc) => acc.id == fromId);
        const toUser = state.accounts.find((acc) => acc.id == toId);
        if (fromUser && toUser && fromUser.balance >= amount) {
            fromUser.balance -= amount;
            toUser.balance += amount;
        } else if (fromUser && toUser && fromUser.balance < amount) {
            console.log("Insufficient funds");
        } else {
            console.log("No Account deatils found");
        }
    }
  },
});

const { createAccount, getAccountDetails, getBalance, deposit, withdraw, transfer } =
  bankSlice.actions;

const store = configureStore({
  reducer: {
    bank: bankSlice.reducer,
  },
});

store.subscribe(() => {
  console.log("Updated State:", JSON.stringify(store.getState(), null,2));
});

store.dispatch(createAccount({ id: 1001, name: "Tarun", balance: 10000 }));
store.dispatch(getAccountDetails({ id: 1001 }));
store.dispatch(getBalance({ id: 1001 }));
store.dispatch(createAccount({ id: 1002, name: "Ganesh", balance: 200000 }));
store.dispatch(createAccount({ id: 1003, name: "Amar", balance: 300000 }));
store.dispatch(getBalance({ id: 1002 }));
store.dispatch(deposit({ id: 1002, amount: 50000 }));
store.dispatch(withdraw({ id: 1001, amount: 5000 }));
store.dispatch(getBalance({ id: 1001 }));
store.dispatch(transfer({ fromId: 1003, toId: 1001, amount: 10000 }));

