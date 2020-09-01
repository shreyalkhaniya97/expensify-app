import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore();

// addExpense -> water Bill
// addExpense -> Gas Bill
// setTextFilter -> bill
// getVisibleExpenses -> print visible ones to screen

store.dispatch(addExpense({ description: "Water Bill", amount: 4500 }));
store.dispatch(
  addExpense({ description: "Rent", amount: 1095, createdAt: 1000 })
);
store.dispatch(addExpense({ description: "Gas Bill" }));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
