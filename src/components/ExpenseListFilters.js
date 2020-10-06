import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, setDateRange, setSortBy } from '../actions/filters';

class ExpenseListFilters extends React.Component {
  state = { calFocused: null }

  onFocusChange = calFocused =>
    this.setState(() => ({ calFocused }))

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch (setDateRange ({ startDate, endDate }));
  }

  render() {
    return (
      <div>
        <input type='text' value={this.props.filters.text}
          onChange = {e => {
            this.props.dispatch (setTextFilter ({ text: e.target.value }));
          }}
        />
        <select value={this.props.filters.sortBy}
          onChange={e => {
            this.props.dispatch(setSortBy (e.target.value));
          }}>
            <option value="date">Date</option>
            <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDateId = "startDateId"
          endDateId = "endDateId"
          startDate = {this.props.filters.startDate}
          endDate = {this.props.filters.endDate}
          onDatesChange = {this.onDatesChange}
          focusedInput = {this.state.calFocused}
          onFocusChange = {this.onFocusChange}
          showClearDates = {true}
          numberOfMonths = {1}
          isOutsideRange = {() => false}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({ filters: state.filters });

export default connect (mapStateToProps) (ExpenseListFilters);