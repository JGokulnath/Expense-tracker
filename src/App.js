import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car",
    amount: 924,
    date: new Date(2020, 8, 24),
  },
  {
    id: "e2",
    title: "House Insurance",
    amount: 2424,
    date: new Date(2021, 9, 18),
  },
  {
    id: "e3",
    title: "Desk",
    amount: 456,
    date: new Date(2020, 10, 1),
  },
  { id: "e4", title: "Gardening", amount: "32", date: new Date(2021, 4, 2) },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    expense.amount = +expense.amount;
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <Header />
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
      <Footer />
    </div>
  );
};

export default App;
