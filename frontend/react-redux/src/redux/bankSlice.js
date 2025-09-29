import { createSlice } from "@reduxjs/toolkit";

const bankSlice = createSlice({
  name: "counter",
  initialState: {
    accounts: [],
  },
  reducers: {
    createAccount: (state, action) => {
      const { id, name, balance } = action.payload;
      const user = state.accounts.find((acc) => acc.id == id);
      if (!user) {
        state.accounts.push({ id, name, balance });
        state.message = "Account created successfully";
      }
      else{
        state.message = "Account with this id already exists";
      }
    },
    getAccountDetails: (state, action) => {
      const { id } = action.payload;
      const user = state.accounts.find((acc) => acc.id == id);
        if (!user) {
          state.message = "No user found";
        }
        else{
          state.message = `${user.name} - ${user.balance}`;
        }
    },
    updateAccount: (state, action) => {
        const { id, name } = action.payload;
        const user = state.accounts.find((acc) => acc.id == id);
        if (!user) {
          state.message = "No user found";
        }
        else{
          user.name = name;
          state.message = "Account name updated successfully";
        }
    },
    getBalance: (state, action) => {
      const { id } = action.payload;
      const user = state.accounts.find((acc) => acc.id == id);
        if (!user) {
          state.message = "No user found";
        }
        else{
          state.message = `${user.name}'s Account Balance is - ${user.balance}`;
        }
    },
    deposit: (state, action) => {
      const { id, amount } = action.payload;
      const user = state.accounts.find((acc) => acc.id == id);    
      if (user) {
        user.balance += amount;
        state.message = `₹${amount} deposited successfully. New balance is ₹${user.balance}`;
      } else {
        state.message = "No Account details found";
      }
    },
    withdraw: (state, action) => {
      const { id, amount } = action.payload;
      const user = state.accounts.find((acc) => acc.id == id);
      if (user && user.balance >= amount) {
        user.balance -= amount;
        state.message = `₹${amount} withdrawn successfully. New balance is ₹${user.balance}`;
      } else if (user && user.balance < amount) {
        state.message = "Insufficient funds";
      } else {
        state.message = "No Account details found";
      }
    },
    transfer: (state, action) => {
        const { fromId, toId, amount } = action.payload;
        const fromUser = state.accounts.find((acc) => acc.id == fromId);
        const toUser = state.accounts.find((acc) => acc.id == toId);    
        if (fromUser && toUser && fromUser.balance >= amount) {
            fromUser.balance -= amount;
            toUser.balance += amount;
            state.message = `₹${amount} transferred successfully. New balance is ₹${fromUser.balance}`;
        } else if (fromUser && toUser && fromUser.balance < amount) {
            state.message = "Insufficient funds";
        } else {
            state.message = "No Account details found";
        }
    },
  },
});

export const { createAccount, getAccountDetails, updateAccount, getBalance, deposit, withdraw, transfer } = bankSlice.actions;

export default bankSlice;
