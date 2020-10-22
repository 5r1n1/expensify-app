import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExp } from '../actions/expenses';

export class AddExpensePage extends React.Component {

  onSubmit = exp => {
    this.props.addExpense(exp);
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <div className='page-header'>
          <div className='content-container'>
            <h1 className='page-header__title'>Add Expense</h1>
          </div>
        </div>
        <div className='content-container'>
          <ExpenseForm onSubmit={this.onSubmit} />
        </div>
      </div>
    );
  }
}

const mapDispatch = dispatch => ({
  addExpense: exp => dispatch(addExp(exp))
});

export default connect(undefined, mapDispatch)(AddExpensePage);
