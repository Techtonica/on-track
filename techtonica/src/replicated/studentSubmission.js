import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import './studentSubmission.css';

const StudentSubmission = (props) => {
  const [userData, setUserData] = useState({
    email: localStorage.email,
    topic: props.match.params.topic,
    url: '',
    helpful: null,
    time: null,
    difficulty: null,
    feedback: ''
  });

  const { email, topic, url, feedback } = userData;

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.dir(userData);
    let Airtable = require('airtable');
    let base = new Airtable({ apiKey: 'key0ElcLHXJqeZtUy' }).base('appx5F93ksl9EZtQt');
    base('Teacher Log').create([
      {
        "fields": {
          "Email": userData.email,
          "Topic": props.match.params.topic,
          "URL": userData.url,
          "Helpful": userData.helpful,
          "Time": userData.time,
          "Difficulty": userData.difficulty,
          "Feedback": userData.feedback
        }
      }
    ], function (err, records) {
      if (err) {
        console.error(err);
        return;
      }
      records.forEach(function (record) {
        console.log(record.getId());
      });
    });
  }

  return (
    <div className="submission-body">
      <form className="student-form" onSubmit={handleSubmit}>
        <input type="hidden" name="email" value={email} ></input>
        <h1 className="submission-title">Topic: {topic} </h1>
        <div className="url">
          <h3>Github Link: </h3>
          <input className="url-input" id="url" type="url" name="url" value={url} onChange={handleChange} />
        </div>
        <div className="helpful">
          <h3>How helpful was this topic/assignment?</h3>
          <div>
            <label>Not at All</label>
            <input type="radio" name="helpful" value="1" onChange={handleChange} />
            <label>Somewhat</label>
            <input type="radio" name="helpful" value="2" onChange={handleChange} />
            <label>Very</label>
            <input type="radio" name="helpful" value="3" onChange={handleChange} />
            <label>Amazingly</label>
            <input type="radio" name="helpful" value="4" onChange={handleChange} />
          </div>
        </div>
        <div className="time">
          <h3>How long did it take?</h3>
          <div>
            <label>less than 1 hour</label>
            <input type="radio" name="time" value="1" onChange={handleChange} />
            <label>~1 hour</label>
            <input type="radio" name="time" value="2" onChange={handleChange} />
            <label>~2 hours</label>
            <input type="radio" name="time" value="3" onChange={handleChange} />
            <label>more than 2 hours</label>
            <input type="radio" name="time" value="4" onChange={handleChange} />
          </div>
        </div>
        <div className="difficulty">
          <h3>How difficult was it?</h3>
          <div>
            <label>Easy Breezy</label>
            <input type="radio" name="difficulty" value="1" onChange={handleChange} />
            <label>Alright</label>
            <input type="radio" name="difficulty" value="2" onChange={handleChange} />
            <label>A Bit Challenging</label>
            <input type="radio" name="difficulty" value="3" onChange={handleChange} />
            <label>Challenging</label>
            <input type="radio" name="difficulty" value="4" onChange={handleChange} />
          </div>
        </div>
        <div className="feedback">
          <h3>Feedback</h3>
          <input className="feedback-input" id="feedback" type="text" name="feedback" value={feedback} onChange={handleChange} />
        </div>
        <input className="button-input" type="submit" value="submit" />
      </form>
    </div>
  )
}

export default withRouter(StudentSubmission);