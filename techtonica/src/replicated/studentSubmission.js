import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import './studentSubmission.css';

const StudentSubmission = (props) => {
  const [ userData, setUserData ] = useState({
    email: localStorage.email,
    topic: props.match.params.topic,
    url: '',
    helpful: null,
    time: null,
    difficulty: null
  });
  
  const { email, topic, url } = userData;

  const handleChange = (e) => {
    setUserData({...userData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e){
    e.preventDefault();
    console.dir(userData);
  }

  return(
    <div className="submission-body">
      <form className="student-form" onSubmit={handleSubmit}>
        <input type="hidden" name="email" value={email} ></input>

        <h1 className="submission-title">Topic: {topic} </h1>

        <label>Github Link: 
          <input id="url" type="url" name="url" value={url} 
            onChange={handleChange} />
        </label>

        <div className="helpful">
          <h3>How helpful was this topic/assignment?</h3>

          <label>Not at All
            <input type="radio" name="helpful" value="1"
              onChange={handleChange} />
          </label>

          <label>Somewhat
            <input type="radio" name="helpful" value="2"
              onChange={handleChange} />
          </label>

          <label>Very
            <input type="radio" name="helpful" value="3"
              onChange={handleChange} />
          </label>

          <label>Amazingly
            <input type="radio" name="helpful" value="4"
              onChange={handleChange} />
          </label>
          
        </div>

        <div className="time">
          <h3>How long did it take?</h3>

          <label>less than 1 hour
            <input type="radio" name="time" value="1"
              onChange={handleChange} />
          </label>

          <label>~1 hour
            <input type="radio" name="time" value="2"
              onChange={handleChange} />
          </label>

          <label>~2 hours
            <input type="radio" name="time" value="3"
              onChange={handleChange} />
          </label>

          <label>more than 2 hours
            <input type="radio" name="time" value="4"
              onChange={handleChange} />
          </label>
          
        </div>

        <div className="difficulty">
          <h3>How difficult was it?</h3>

          <label>Easy Breezy
            <input type="radio" name="difficulty" value="1"
              onChange={handleChange} />
          </label>

          <label>Alright
            <input type="radio" name="difficulty" value="2"
              onChange={handleChange} />
          </label>

          <label>A Bit Challenging
            <input type="radio" name="difficulty" value="3"
              onChange={handleChange} />
          </label>

          <label>Challenging
            <input type="radio" name="difficulty" value="4"
              onChange={handleChange} />
          </label>
          
        </div>
        
        <input type="submit" value="submit" />
      </form>
    </div>
  )
}

export default withRouter(StudentSubmission);