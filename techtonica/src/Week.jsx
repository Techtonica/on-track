import React from 'react';
import Day from './Day';

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
      console.log(daysListData)
      let daysOfWeek = Object.keys(daysListData || {}).map((day) => <Day key={day}
                                                                         dayData={daysListData[day]}/>)
    console.log(daysOfWeek)
      return(
      <div> 
        <h2 style={{color: 'red'}}>Week #{weekNumber}</h2>
        <button onClick={this.toggleDays.bind(this)}/>
            {this.state.isOpen && daysOfWeek}
      </div>)

    }
}

export default Week;