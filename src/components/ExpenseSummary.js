import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  getVisibleExpenses,
  getExpenseSummary
} from '../selectors/expenses';

export const ExpenseSummary = ({ count, total }) => {
  const expWord = count === 1 ? ' expense totaling ' : ' expenses totaling ';
  return (
    <div className='page-header'>
      <div className='content-container'>
        <h1 className='page-header__title'>
          Viewing <span>{count}</span>{expWord}
          <span>
            {new Intl.NumberFormat(
              'en-IN',
              { style: 'currency', currency: 'INR' }
            ).format(total)}
          </span>
        </h1>
        <div className='page-header__actions'>
          <Link className='button' to='/create'>Add Expense</Link>
        </div>
      </div>
    </div>
  );
};

const mapState = state =>
  getExpenseSummary(getVisibleExpenses(state.expenses, state.filters));

export default connect(mapState)(ExpenseSummary);
