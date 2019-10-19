import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt, faDesktop, faVideo } from '@fortawesome/free-solid-svg-icons'
class Day extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
      const { dayData } = this.props;
      console.log(dayData)
      let parsedDayData = (dayData || []).map((activity) => 
      <div><hr/>
        <span className="activity-item">{activity['Topic (Estimated Time)']} </span>
        <span className="activity-item">{activity['Estimated time (hours)']} hours</span>
        <span className="activity-item"> <a href={activity['Topic Outline']}><FontAwesomeIcon icon={faFileAlt} /></a></span>
        <span className="activity-item"><a href={activity['Slides']}><FontAwesomeIcon icon={faDesktop}/></a> </span>
        <span className="activity-item"><a href={activity['Video']}><FontAwesomeIcon icon={faVideo} /></a> </span>
        <span className="activity-item">{activity['Assessment'] ? "Assessment " + activity['Assessment'] : ""} </span>
    </div>)
      
        return(
        <div style={{borderStyle: 'solid'}}> 
            <h2> { dayData[0]['Day'] ? "Day " + dayData[0]['Day'] : "Homework" }</h2>
            {parsedDayData}
        </div>)
    }
}

export default Day; 