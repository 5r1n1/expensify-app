import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const ExpenseListItem = props =>
  <div>
    <Link to={'/edit/'+props.id}>
      <h3>Description: {props.description}</h3>
    </Link>
    <div>Created@: {moment(props.createdAt).format('MMMM Do, YYYY')}</div>
    <div>Amount:
      {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' })
        .format(props.amount / 100)}
    </div>
    <div>Note: {props.note}</div>
    <p></p>
  </div>;

export default ExpenseListItem;
