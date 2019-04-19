import React from 'react'
import {Link} from 'react-router-dom';

const ExpenseListItem = props =>
  <div>
    <Link to={'/edit/'+props.id}>
      <h3>Description: {props.description}</h3>
    </Link>
    <div>Created@: {props.createdAt}</div>
    <div>Amount: {props.amount}</div>
    <div>Note: {props.note}</div>
    <p></p>
  </div>

export default ExpenseListItem 