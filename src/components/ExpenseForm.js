import React from 'react'
import moment from 'moment'
import {SingleDatePicker} from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'
import 'react-dates/initialize'

export default class ExpenseForm extends React.Component {

  constructor (props) {
    super (props)

    this.state = { 
      description: props.expense ? props.expense.description : '', 
      amount: props.expense ? props.expense.amount : 0,
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      note: props.expense ? props.expense.note : '',
      calFocused: false,
      error: ''
    }
  }

  onDescriptionChange = e => {
    const description = e.target.value
    this.setState (() => ({description}))
  }

  onAmountChange = e => {
    const amount = e.target.value
    if (!amount || amount.match (/^\d{1,}(\.\d{0,2})?$/))
      this.setState (() => ({amount}))
  }

  onDateChange = createdAt =>  {
    if (createdAt) this.setState (() => ({createdAt}))
  }
  
  onFocusChange = ({ focused }) => this.setState({ calFocused: focused })

  onNoteChange = e => {
    const note = e.target.value
    this.setState (() => ({note}))
  }
  
  onSubmit = e => {
    e.preventDefault()
    if (!this.state.description || !this.state.amount)
      this.setState ({error: 'Please provide all information'})
    else {
      this.setState ({error: ''})
      this.props.onSubmit ({
        description: this.state.description,
        amount: parseFloat (this.state.amount),
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      })
    }
  }

  render () {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <label>Description : </label>
          <input 
            type="text"
            placeholder="Description"
            value={this.state.description}
            onChange={this.onDescriptionChange}
            autoFocus
          /><br/>
          <label>Amount : </label>
          <input 
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          /><br/>
          <label>CreatedAt: </label>
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={day=>false}
            id="702"
          /><br/>
          <label>Note : </label>
          <textarea
            placeholder="Note"
            value={this.state.note}
            onChange={this.onNoteChange}
          />
          <button>{this.props.expense ? 'Update Expense' : 'Add Expense'}</button>
        </form>
      </div>
    )
  }
}