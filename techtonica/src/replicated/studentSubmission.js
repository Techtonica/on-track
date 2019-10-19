import React from 'react';
// import { withRouter } from 'react-router-dom';
import './studentSubmission.css';

const StudentSubmission = () => {

  function handleSubmit(){

  }

  function getTopic(){

  }

  function getEmail(){

  }
  
  return(
    <div className="submission-body">
      <form className="student_form" onSubmit={handleSubmit()}>
        <input type="hidden" name="email" value={getEmail()}></input>

        <label>Topic: 
          <input id="topic" type="text" name="topic" value={getTopic()} />
        </label>

        <label>Github Link: 
          <input id="url" type="url" name="url" value="" ></input>
        </label>

        <label>How long did it take? 
          <input type="range" list="tickmarks">

            <datalist id="tickmarks">
              <option value="<1 hr"></option>
              <option value="~1 hr"></option>
              <option value="~2 hrs"></option>
              <option value="~3 hrs"></option>
              <option value="~4 hrs"></option>
              <option value="~5 hrs"></option>
              <option value=">5 hrs"></option>
            </datalist>

          </input>

        </label>

        <label>Difficulty (1 = easiest, 4 = hardest): 
          <input id="time" type="number" name="time" value="" ></input>
        </label>

      </form>
    </div>
  )
}

export default StudentSubmission;