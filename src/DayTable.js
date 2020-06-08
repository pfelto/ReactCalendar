import React from 'react';
import DayBox from './DayBox';
import './DayTable.css';

class DayTable extends React.Component {
    renderBox(i) {
        return <DayBox value = {i}/>;
      }
    render() {
      return (
        <body>
        <table>
            <tr>
                <th>Sunday</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
                <th>Saturday</th>
            </tr>
            <tr>
                {this.renderBox(1)}
                {this.renderBox(2)}
                {this.renderBox(3)}
                {this.renderBox(4)}
                {this.renderBox(5)}
                {this.renderBox(6)}
                {this.renderBox(7)}
            </tr>
            <tr>
                {this.renderBox(8)}
                {this.renderBox(9)}
                {this.renderBox(10)}
                {this.renderBox(11)}
                {this.renderBox(12)}
                {this.renderBox(13)}
                {this.renderBox(14)}
            </tr>
            <tr>
                {this.renderBox(15)}
                {this.renderBox(16)}
                {this.renderBox(17)}
                {this.renderBox(18)}
                {this.renderBox(19)}
                {this.renderBox(20)}
                {this.renderBox(21)}
            </tr>
            <tr>
                {this.renderBox(22)}
                {this.renderBox(23)}
                {this.renderBox(24)}
                {this.renderBox(25)}
                {this.renderBox(26)}
                {this.renderBox(27)}
                {this.renderBox(28)}  
            </tr>
            <tr>
                {this.renderBox(29)}
                {this.renderBox(30)}
                {this.renderBox(31)}
                {this.renderBox(32)}
                {this.renderBox(33)}
                {this.renderBox(34)}
                {this.renderBox(35)}
            </tr>
        </table>
      </body>
      );
    }
  }
  
export default DayTable;