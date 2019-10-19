import React from 'react';
import { withRouter } from 'react-router-dom';
import Tabletop from 'tabletop';
import Week from '../Week'

import './home.css';

  class Home extends React.Component {
    constructor() {
      super()
      this.state = {
        rawData: []
      }
    }

    componentDidMount() {
      Tabletop.init({
        key: '1lz8QNaAKiBp4Yy6EKIk2Smp7-F9EBd1SJsrl1s8Quzo',
        callback: googleData => {
          console.log('google sheet data --->', googleData)
          this.setState({rawData: googleData})
        },
        simpleSheet: true
      })
    }

    parseRawData() {
      const {rawData} = this.state;
      let parsedData = {}
      for (let i = 0; i < rawData.length; i++) {
          let weekNumber = rawData[i]['Overall Week Number']
          if (weekNumber == null) {
            continue;
          } else if (!Object.keys(parsedData).includes(weekNumber)) {
            let dayNumber = rawData[i]['Day']
            parsedData[weekNumber] = {[dayNumber]: rawData[i]}
          } else {
            let dayNumber = rawData[i]['Day']
            parsedData[weekNumber][dayNumber] = rawData[i]
          }
      }
      return parsedData;
    }



    render() {
      let parsedData = this.parseRawData();
      return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Techtonica Home Page</h1>
          </header>
          {Object.keys(parsedData).map((weekNumber) => 
                                        <Week 
                                            weekNumber={weekNumber} 
                                            daysListData={parsedData[weekNumber]}/>)}
        </div>
      );
    }
  }


export default withRouter(Home);