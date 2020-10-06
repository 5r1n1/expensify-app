import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from '../components/ExpenseListItem';
import { getVisibleExpenses } from '../selectors/expenses';

export const ExpenseList = props =>
  <div>
    {props.expenses.length ? props.expenses.map (exp => (
        <ExpenseListItem key={exp.id} {...exp} />)) :
        <p>{'No Expenses'}</p>
      }
  </div>;

const mapStateToProps = state =>
  ({expenses: getVisibleExpenses (state.expenses, state.filters)});

export default connect (mapStateToProps)(ExpenseList);
