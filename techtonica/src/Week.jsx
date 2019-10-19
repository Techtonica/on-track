import React from 'react';

  export class Week extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }

    render() {
      const { weekNumber, days } = this.props;
      let daysOfWeek = (days).map((day) => <Day key={day.dayNumber}
                                                day={day}/>)
      return(
      <div> 
        <button onClick={() => this.setState({isOpen: !this.state.isOpen}).bind(this)}/>
            {this.state.isOpen && daysOfWeek}
      </div>)

    }
}