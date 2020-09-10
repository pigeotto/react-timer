import React from 'react';
import Button from 'react-bootstrap/Button';

const StartButton = (props) => {
	return (
		<Button 
			type="button" 
			variant="outline-primary" 
			onClick={console.log('Start Button Clicked')}>
			START
		</Button>
	);
}

export default StartButton;