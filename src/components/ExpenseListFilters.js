import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, setDateRange, setSortBy } from '../actions/filters';

export class ExpenseListFilters extends React.Component {
  state = { calFocused: null }

  onTextChange = e => this.props.setTextFilter(e.target.value);
  onSortChange = e => this.props.setSortBy(e.target.value);
  onDatesChange = range => this.props.setDateRange (range);
  onFocusChange = calFocused => this.setState(() => ({ calFocused }))

  render() {
    return (
      <div>
        <input type='text' value={this.props.filters.text}
          onChange = {this.onTextChange}
        />
        <select value={this.props.filters.sortBy}
          onChange={this.onSortChange}>
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

const mapState = state => ({ filters: state.filters });
const mapDispatch = dispatch => ({
  setSortBy: sortBy => dispatch(setSortBy(sortBy)),
  setDateRange: range => dispatch(setDateRange(range)),
  setTextFilter: text => dispatch(setTextFilter({ text })),
});

export default connect (mapState, mapDispatch) (ExpenseListFilters);