import React from 'react';

class Day extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
      const { dayData } = this.props;

      let parsedDayData = Object.keys(dayData || {}).map((d) => <div><br/><p>{dayData[d]}</p></div>)
        return(

        <div style={{borderStyle: 'solid'}}> 
            {/* <button onClick={() => this.setState({isOpen: !this.state.isOpen}).bind(this)}/> */}
                {parsedDayData}
        </div>)
    }
}

export default Day; 