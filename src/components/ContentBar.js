import React, { Component } from 'react';
import GridPos from '../components/GridPos';
import './ContentBar.css';


class ContentBar extends Component {
  render() {
    return (
      <GridPos className="ContentBar" pos={this.props.pos} style={{height:this.props.height}}>
        {this.props.children}
      </GridPos>
    );
  }
}

export default ContentBar;
