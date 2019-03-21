import React from 'react'

const ExpenseListItem = ({description, amount, createdAt}) =>
  <div>
    <div>Description: {description}</div>
    <div>Amount: {amount}</div>
    <div>Created@: {createdAt}</div>
    <p></p>
  </div>

export default ExpenseListItem