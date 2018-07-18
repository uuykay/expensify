import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";

const ExpenseList = props => (
  <div>
    <h1>Expense List</h1>
    {props.filters.text}
    <ul>
      {props.expenses.map((expense, i) => (
        <ExpenseListItem
          key={i}
          description={expense.description}
          amount={expense.amount}
          createdAt={expense.createdAt}
        />
      ))}
    </ul>
  </div>
);

// Map store state to component props
const mapStateToProps = state => {
  console.log(state);
  return {
    expenses: state.expenses,
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseList);
