import React from 'react';
import './DayBox.css';

class DayBox extends React.Component {
    render() {
      return (
        <td>
            {this.props.value}
        </td>
      );
    }
  }

  export default DayBox;