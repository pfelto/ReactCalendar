import React from 'react';
import './MonthSlider.css';

class MonthSlider extends React.Component {
    render() {
      return (
        <div className = "Row">
            <button className = "Column">
                BACK
            </button>
            <p className = "Column"> JUNE 2020 </p>
            <button className = "Column">
                FORWARD
            </button>
        </div>
      );
    }
  }
  
export default MonthSlider;