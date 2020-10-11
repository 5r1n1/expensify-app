import React from 'react';
import { connect } from 'react-redux';
import {
  getVisibleExpenses,
  getExpenseSummary
} from '../selectors/expenses';

export const ExpenseSummary = ({ count, total }) => {
  const expWord = count === 1 ? ' expense totaling ' : ' expenses totaling ';
  return (
    <p> displaying {count}{expWord}
    {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' })
      .format(total / 100)}
    </p>
  );
};

const mapState = state =>
  getExpenseSummary(getVisibleExpenses(state.expenses, state.filters));

export default connect(mapState)(ExpenseSummary);
