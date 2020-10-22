import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from '../components/ExpenseForm';
import { editExp, delExp } from '../actions/expenses';

export class EditExpensePage extends React.Component {

  editExpense = exp => {
    this.props.editExpense(this.props.expense.id, exp);
    this.props.history.push('/');
  }

  removeExpense = () => {
    this.props.removeExpense(this.props.expense.id);
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <div className='page-header'>
          <div className='content-container'>
            <h1 className='page-header__title'>Edit Expense</h1>
          </div>
        </div>
        <div className='content-container'>
          <ExpenseForm
            expense={this.props.expense}
            onSubmit={this.editExpense}
          />
          <button className='button--secondary' onClick={this.removeExpense}>
            Remove Expense
          </button>
        </div>
      </div>
    );
  }
}

const mapState = (state, props) => ({
	expense: state.expenses.find (exp => exp.id === props.match.params.id)
});

const mapDispatch = dispatch => ({
  editExpense: (id, updates) => dispatch(editExp(id, updates)),
  removeExpense: id => dispatch(delExp(id))
});

export default connect (mapState, mapDispatch) (EditExpensePage);
