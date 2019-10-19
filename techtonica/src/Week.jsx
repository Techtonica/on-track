import React from 'react';
import Day from './Day';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

class Week extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: true
        }
    }

    toggleDays() {
        this.setState({isOpen: !this.state.isOpen})
    }

    render() {
      const { weekNumber, daysListData } = this.props;
      let daysOfWeek = Object.keys(daysListData || {}).map((day) => <Day key={day}
                                                                         dayData={daysListData[day]}/>)
      return(
      <div> 
        <h2>Week #{weekNumber} <FontAwesomeIcon icon={faAngleDown} onClick={this.toggleDays.bind(this)} /></h2>
            {this.state.isOpen && daysOfWeek}
      </div>)

    }
}

export default Week;