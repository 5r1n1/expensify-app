import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {

  onSubmit = exp => {
    this.props.addExpense(exp);
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapDispatch = dispatch => ({
  addExpense: exp => dispatch(addExpense(exp))
});

export default connect(undefined, mapDispatch)(AddExpensePage);
