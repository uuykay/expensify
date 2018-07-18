import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";

const ExpenseList = props => (
  <div>
    <h1>Expense List</h1>
    <ul>
      {props.expenses.map((expense, i) => (
        <ExpenseListItem
          key={expense.id}
          // description={expense.description}
          // amount={expense.amount}
          // createdAt={expense.createdAt}
          {...expense}
        />
      ))}
    </ul>
  </div>
);

// Map store state to component props
const mapStateToProps = state => {
  console.log(state);
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
