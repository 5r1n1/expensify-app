import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/initialize';

export default class ExpenseForm extends React.Component {

  constructor(props) {
    super (props);

    this.state = {
      description: props.expense ? props.expense.description : '',
      amount: props.expense ? props.expense.amount : 0,
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      note: props.expense ? props.expense.note : '',
      calFocused: false,
      error: ''
    };
  }

  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState (() => ({description}));
  }

  onAmountChange = e => {
    const amount = e.target.value;
    if (!amount || amount.match (/^\d{1,}(\.\d{0,2})?$/))
      this.setState (() => ({amount}));
  }

  onDateChange = createdAt => {
    if (createdAt) this.setState (() => ({createdAt}));
  }

  onFocusChange = ({ focused }) => { this.setState({ calFocused: focused }); }

  onNoteChange = e => {
    const note = e.target.value;
    this.setState (() => ({note}));
  }

  onSubmit = e => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount)
      this.setState ({error: 'Please provide all information'});
    else {
      this.setState ({error: ''});
      this.props.onSubmit ({
        description: this.state.description,
        amount: parseFloat (this.state.amount),
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  }

  render() {
    return (
      <form className='form' onSubmit={this.onSubmit}>
        {this.state.error && <p className='form__err'>{this.state.error}</p>}
        <input
          className='text-input'
          type="text"
          placeholder="Description"
          value={this.state.description}
          onChange={this.onDescriptionChange}
          autoFocus
        />
        <input
          className='text-input'
          type="text"
          placeholder="Amount"
          value={this.state.amount}
          // value={new Intl.NumberFormat(
          //   'en-IN',
          //   { style: 'currency', currency: 'INR' }
          // ).format(this.state.amount / 100)}
          onChange={this.onAmountChange}
        />
        <SingleDatePicker
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.calFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={_day=>false}
          id="702"
        />
        <textarea
          className='text-area'
          placeholder="Note"
          value={this.state.note}
          onChange={this.onNoteChange}
        />
        <div>
          <button className='button'>
            {this.props.expense ? 'Save ' : 'Add '} Expense
          </button>
        </div>
      </form>
  );
  }
}