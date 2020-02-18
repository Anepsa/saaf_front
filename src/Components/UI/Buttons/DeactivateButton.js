import React from 'react';
import { Button } from 'react-bootstrap';
import { Consumer } from '../../../Context/Context';

export const DeactivateButton = (props) => {
	console.log(props.status)
	// console.log(props.itemData);
	return (
		<Consumer>
			{(context) => (
				<Button 
				variant="dark" size="sm" 
				onClick={() => context.deactFunc(props.deactLink, props.itemData)}>
					{props.status}
				</Button>
			)}
		</Consumer>
	);
};
