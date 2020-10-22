import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from '../components/ExpenseListItem';
import { getVisibleExpenses } from '../selectors/expenses';

export const ExpenseList = props =>
  <div className='content-container'>
    <div className='list-header'>
      <div className='show-for-mobile'>Expenses</div>
      <div className='show-for-desktop'>Expenses</div>
      <div className='show-for-desktop'>Amount</div>
    </div>
    <div className='list-body'>
      {props.expenses.length ?
        props.expenses.map(
          exp => (<ExpenseListItem key={exp.id} {...exp} />)
        ) :
        <div className="list-item__message"><p>{'No Expenses'}</p></div>
      }
    </div>
  </div>;

const mapStateToProps = state =>
  ({expenses: getVisibleExpenses (state.expenses, state.filters)});

export default connect (mapStateToProps)(ExpenseList);
