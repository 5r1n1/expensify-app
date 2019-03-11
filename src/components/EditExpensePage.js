import React from 'react';

const EditExpensePage = props => {
	console.log (props)
	return (
		<div>
			Currently editing {props.match.params.id}
		</div>
	)	
}

export default EditExpensePage