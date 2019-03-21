import React from 'react'
import {connect} from 'react-redux'
import ExpenseListItem from '../components/ExpenseListItem'
import getVisibleExpenses from '../selectors/expenses'

const ExpenseList = props => 
  <div>
    <h1>ExpenseList</h1>
      {props.expenses.map (exp => (<ExpenseListItem key={exp.id} {...exp} />))}
  </div>

const mapStateToProps = state => 
  ({expenses: getVisibleExpenses (state.expenses, state.filters)})

export default connect (mapStateToProps)(ExpenseList)