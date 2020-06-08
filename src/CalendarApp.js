import React from 'react';
import './CalendarApp.css';
import MonthSlider from './MonthSlider';
import DayTable from './DayTable';

class CalendarApp extends React.Component {
    render() {
      return (
        <body>
            <div>
                <MonthSlider />
                <DayTable />
            </div>
        </body>
      );
    }
  }
  
export default CalendarApp;