import React from 'react';
import './MonthSlider.css';

class MonthSlider extends React.Component {
    render() {
      return (
        <div className = "Row">
            <button className = "Column_back">
                BACK
            </button>
            <h1 className = "Column_month"> JUNE 2020 </h1>
            <button className = "Column_forward">
                FORWARD
            </button>
        </div>
      );
    }
  }
  
export default MonthSlider;