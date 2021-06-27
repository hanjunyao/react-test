/*
 * @Autor: hanjy
 * @Date: 2021-05-03 16:59:05
 * @LastEditors: hanjy
 * @LastEditTime: 2021-05-03 17:08:35
 * @Description: 
 * @FilePath: /reacttest1/src/components/TemperatureInput.js
 */
import React from 'react';
const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};
class TemperatureInput extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(e) {
      this.props.onTemperatureChange(e.target.value);
    }
  
    render() {
      const temperature = this.props.temperature;
      const scale = this.props.scale;
      return (
        <fieldset>
          <legend>Enter temperature in {scaleNames[scale]}:</legend>
          <input value={temperature}
                 onChange={this.handleChange} />
        </fieldset>
      );
    }
  }
  
export default TemperatureInput;
