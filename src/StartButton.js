import React from 'react';
import Button from 'react-bootstrap/Button';

const StartButton = (props) => {
	return (
		<Button 
			type="button" 
			variant={props.variant} 
			onClick={props.handleClick}>
			{props.text}
		</Button>
	);
}

export default StartButton;