import React from "react";
import { Link } from "react-router-dom";

const ExpenseListItem = props => {
  const { id, description, amount, createdAt } = props.expense;
  return (
    <div>
      <h3>
        <Link to={`/edit/${id}`}>{description}</Link>
      </h3>
      <p>
        {amount} - {createdAt}
      </p>
    </div>
  );
};

export default ExpenseListItem;
