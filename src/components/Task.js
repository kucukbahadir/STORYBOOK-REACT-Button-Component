// src/components/Task.js

import React, { Component } from 'react';
import { action } from '@storybook/addon-actions';

export default function NormalButton({givingImage}) {

  return (
    <div className="btn">
      <button onClick={action('Hey there Clicked on me !!!')}>Helloo</button>
    </div>
  )

}


export class ToogleButton extends Component {

  state = {
      on: false,
  };

  toggle =() => {
      this.setState({
          on: !this.state.on,
      });
  };

  render() {
      return (
          <div className="btn">
              <button onClick={this.toggle}>Click Me To Greet You !</button>
              <br></br><br></br>
              {this.state.on &&(
                  <img src="https://media1.tenor.com/images/f716ef1be3c46479a9c411666129a204/tenor.gif?itemid=15367693" alt="a greeting cat"></img>
              )}
              
          </div>
      );
  }
}