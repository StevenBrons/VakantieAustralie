import React, { Component } from 'react';
import GridPos from '../components/GridPos';

class TextBox extends Component {

  render() {
    return (
      <GridPos className="TextBox" {...this.props}>
        {this.props.children}
      </GridPos>
    );
  }
}

export default TextBox;
