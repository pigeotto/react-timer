import React, { useState, useEffect } from 'react';
import Form from "react-bootstrap/Form";

const TimerInput = (props) => {
  
  const [value, setValue] = useState(props.value);
  const [valid, setValid] = useState(true);
	const [readonly, setReadonly] = useState(false);
	useEffect(()=>{
    
    /*TODO: */
    setReadonly(props.startCountdown);
    if (props.startCountdown) {
			if (value > 0) {
        setValid(true);
				setTimeout(()=>setValue((value-0.1)), 100);
			}else if (!value || isNaN(value)) {
        setValid(false);
      }
		}

	})

    return (
      <Form className="col-md-4">
        <Form.Control
          className={ valid 
                      ? "bg-transparent border-0 mx-auto text-light px-4" 
                      : "bg-transparent border border-danger mx-auto text-light px-4" }
          style={ {fontSize:"56pt"} }
          readOnly={ readonly }
          value={ value < 0 
                  ? "Time's Up!"
                  : value.toLocaleString() } 
          onChange={ (e) => setValue(e.target.value) } />
      </Form>
      );
  }

export default TimerInput;