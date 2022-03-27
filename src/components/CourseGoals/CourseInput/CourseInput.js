import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {

    //if the length of userinput is more than 0, alert on input is gone
    if(event.target.value.trim().length > 0){
      setIsValid(true);
    }
    
    setEnteredValue(event.target.value);

  };

  const formSubmitHandler = event => {
    event.preventDefault();

    //avoid input empty on the form and color label will change
    if(enteredValue.trim().length === 0){
      setIsValid(false);
      return;
    }
    //goes to app.js
    props.onAddGoal(enteredValue);
    setEnteredValue('');
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
        <label >Course Goal</label>
        <input 
          type="text" 
          value={enteredValue}
          onChange={goalInputChangeHandler} 
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
