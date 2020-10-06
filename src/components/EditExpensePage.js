import {connect} from 'react-redux';
import ExpenseForm from '../components/ExpenseForm';
import {editExpense, removeExpense} from '../actions/expenses';

const EditExpensePage = props =>
	<div>
		<ExpenseForm
			expense = {props.expense}
			onSubmit = {exp => {
				props.dispatch (editExpense ({
					id: props.match.params.id,
					updates: exp
					}));
				props.history.push('/');
				}}
		/>
		<button
			onClick={() => {
				props.dispatch (removeExpense ({id: props.expense.id}));
				props.history.push('/');
				}}>
			Remove
		</button>
	</div>;

const mapStateToProps = (state, props) => ({
	expense: state.expenses.find (exp => exp.id === props.match.params.id)
});

export default connect (mapStateToProps) (EditExpensePage);
