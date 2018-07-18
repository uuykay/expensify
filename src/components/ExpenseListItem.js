// Export a stateless functional component
// Render: description, amount, createdAt
import React from "react";
import { connect } from "react-redux";
import { removeExpense } from "../actions/expenses";
// button should dispatch an action when clicked
const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
  <div>
    <h3>{description}</h3>
    <p>
      {amount} - {createdAt}
    </p>
    <button
      onClick={() => {
        dispatch(removeExpense({ id }));
      }}
    >
      Remove
    </button>
  </div>
);

export default connect()(ExpenseListItem);
