import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt, faDesktop, faVideo } from '@fortawesome/free-solid-svg-icons'
class Day extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
      let loggedIn = true
      let completed = false
      const { dayData } = this.props;

      let parsedDayData = (dayData || []).map((activity) => 
      <div className="full-row">
      { activity['Topic (Estimated Time)'] ? 
        (<div><hr/>
            <div className="activity-row">
            <span className="activity-item activity-name">{activity['Topic (Estimated Time)']}</span>
            <span className="activity-item activity-time">{ activity['Estimated time (hours)'] ? activity['Estimated time (hours)'] + ' hours' : ''} </span>
            <span className="activity-item">{ activity['Topic Outline'] ? <a href={activity['Topic Outline']}><FontAwesomeIcon icon={faFileAlt} /></a> : null}</span>
            <span className="activity-item">{ activity['Slides'] ? <a href={activity['Slides']}><FontAwesomeIcon icon={faDesktop}/></a> : null}</span>
            <span className="activity-item">{ activity['Video'] ? <a href={activity['Video']}><FontAwesomeIcon icon={faVideo} /></a> : null}</span>
            <span className="activity-item">{ activity['Assessment'] ? "Assessment " + activity['Assessment'] : ""} </span>
            <span className="activity-item">{ loggedIn && !completed ? <a href="/studentSubmission/:topic"><button className='submit'>Submit</button></a> : null}</span>
            </div></div>)
        : null }
    </div>)
      
        return(
        <div> 
            <h2> { dayData[0]['Day'] ? "Day " + dayData[0]['Day'] : "Homework" }</h2>
            {parsedDayData}
        </div>)
    }
}

export default Day; 