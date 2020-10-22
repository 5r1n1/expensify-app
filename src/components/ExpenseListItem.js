import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const ExpenseListItem = props =>
  <Link className='list-item' to={'/edit/'+props.id}>
    <div>
      <h3 className='list-item__title'>{props.description}</h3>
      <span className='list-item__subtitle'>
        {moment(props.createdAt).format('MMMM Do, YYYY')}
      </span>
    </div>
    <div>
      <h3 className='list-item__data'>{new Intl.NumberFormat(
        'en-IN',
        { style: 'currency', currency: 'INR' }
      ).format(props.amount / 100)}</h3>
    </div>
  </Link>;

export default ExpenseListItem;
