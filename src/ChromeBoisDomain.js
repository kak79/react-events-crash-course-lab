import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  constructor(props) {
    super(props);

    this.state = { x: 0, y: 0 };
  }

  handleMouseMove = (event) => {
    this.setState({ x: event.clientX, y: event.clientY });
    
    const { x, y } = this.state;
    drawChromeBoiAtCoords(x,y)

    /* TODO: 
     * This method should -A- capture the `x` and `y` coordinates of the mouse from the event and -B- use them to invoke the drawChromeBoiAtCoords`function that has been provided and is already imported (`drawChromeBoiAtCoords` expects two arguments, an x and a y coordinate)
     */
  }
  
  handleClick() {
    toggleCycling()
  }
  /* TODO: Create -A- an event handler which, when fired, -B- invokes the provided `toggleCycling` function with no arguments. -C- Don't forget the click event listener that should fire it!
   */
  
  handleResize(e) {
    if (e.key === 'a') {
      resize('+')
    } else if (e.key === 's') {
      resize('-')
    } else {
      resize(null)
    }
  }

  /* TODO: Add -A- an event listener to the `<canvas>` element to capture when a key is pressed. -B- When a key is pressed, an event handler should invoke the provided `resize` function with a single argument of either '+' or '-' -C-if the key pressed was 'a', then it should call `resize` with '+' -D- if the key pressed was 's', then it should call `resize` with '-' 
   */
  
  render() {
    return (
      <canvas 
        onKeyPress={this.handleResize}
        onClick={this.handleClick}
        onMouseMove={this.handleMouseMove}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
