import React from 'react';
import DayBox from './DayBox';
import './DayTable.css';

class DayTable extends React.Component {
    renderBox(i) {
        return <DayBox />;
      }
    render() {
      return (
        <body>
        
        <div className="Row">
          <p className="Column"> Sunday </p>
          <p className="Column"> Monday </p>
          <p className="Column"> Tuesday </p>
          <p className="Column"> Wednesday </p>
          <p className="Column"> Thursday </p>
          <p className="Column"> Friday </p>
          <p className="Column"> Saturday </p>
        </div>
        <div className="Row">
          {this.renderBox(0)}
          {this.renderBox(1)}
          {this.renderBox(2)}
          {this.renderBox(3)}
          {this.renderBox(4)}
          {this.renderBox(5)}
          {this.renderBox(6)}
        </div>
        <div className="Row">
          {this.renderBox(7)}
          {this.renderBox(8)}
          {this.renderBox(9)}
          {this.renderBox(10)}
          {this.renderBox(11)}
          {this.renderBox(12)}
          {this.renderBox(13)}
        </div>
        <div className="Row">
          {this.renderBox(14)}
          {this.renderBox(15)}
          {this.renderBox(16)}
          {this.renderBox(17)}
          {this.renderBox(18)}
          {this.renderBox(19)}
          {this.renderBox(20)}
        </div>
        <div className="Row">
          {this.renderBox(21)}
          {this.renderBox(22)}
          {this.renderBox(23)}
          {this.renderBox(24)}
          {this.renderBox(25)}
          {this.renderBox(26)}
          {this.renderBox(27)}
        </div>
        <div className="Row">
          {this.renderBox(28)}
          {this.renderBox(29)}
          {this.renderBox(30)}
          {this.renderBox(31)}
          {this.renderBox(32)}
          {this.renderBox(33)}
          {this.renderBox(34)}
        </div>
      </body>
      );
    }
  }
  
export default DayTable;