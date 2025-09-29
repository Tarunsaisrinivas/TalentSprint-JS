import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createAccount,
  getAccountDetails,
  withdraw,
  deposit,
} from "./redux/bankSlice";
import Stepper from "./Stepper";
const App = () => {
  const accounts = useSelector((state) => state.count.accounts);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    balance: "",
    withdrawAmount: "",
    depositAmount: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCreate = () => {
    dispatch(
      createAccount({
        id: Number(formData.id),
        name: formData.name,
        balance: Number(formData.balance),
      })
    );
  };

  const handleDetails = () => {
    dispatch(getAccountDetails({ id: Number(formData.id) }));
  };

  const handleWithdraw = () => {
    dispatch(withdraw({ id: Number(formData.id), amount: Number(formData.withdrawAmount) }));
  };

  const handleDeposit = () => {
    dispatch(deposit({ id: Number(formData.id), amount: Number(formData.depositAmount) }));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4"> Bank App</h1>

      <div className="grid gap-4 max-w-md">
        <input
          type="number"
          name="id"
          placeholder="Account ID"
          value={formData.id}
          onChange={handleChange}
          className="border p-2"
        />
        <input
          type="text"
          name="name"
          placeholder="Account Holder Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2"
        />
        <input
          type="number"
          name="balance"
          placeholder="Initial Balance"
          value={formData.balance}
          onChange={handleChange}
          className="border p-2"
        />
        <button
          className="bg-orange-400 text-white px-4 py-2"
          onClick={handleCreate}
        >
          Create Account
        </button>

        <button
          className="bg-blue-500 text-white px-4 py-2"
          onClick={handleDetails}
        >
          Get Account Details
        </button>

        <input
          type="number"
          name="withdrawAmount"
          placeholder="Withdraw Amount"
          value={formData.withdrawAmount}
          onChange={handleChange}
          className="border p-2"
        />
        <button
          className="bg-red-500 text-white px-4 py-2"
          onClick={handleWithdraw}
        >
          Withdraw
        </button>
        <input
          type="number"
          name="depositAmount"
          placeholder="Deposit Amount"
          value={formData.depositAmount}
          onChange={handleChange}
          className="border p-2"
        />
        <button
          className="bg-green-500 text-white px-4 py-2"
          onClick={handleDeposit}
        >
          Deposit
        </button>
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-semibold">Account State:</h2>
        <ul className="list-disc pl-5">
          {accounts.length > 0 ? (
            accounts.map((acc) => (
              <li key={acc.id}>
                {acc.id} - {acc.name} : ₹{acc.balance} <br />
                {acc.message}
              </li>
            ))
          ) : (
            <li>No accounts yet</li>
          )}
          {accounts.length > 0 && <p className="mt-4 text-blue-600 font-medium">{accounts[accounts.length - 1].message}</p>}
        </ul>
    
       
      </div>

    </div>
  );
};

export default App;