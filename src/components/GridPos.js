import React, { Component } from 'react';

class GridPos extends Component {

  render() {
    // [x,y,width,height,columnEnd,rowEnd]

    let p = this.props.pos;
    if (p == null) {
      p = [1,1,1,1];
    }


    let style = {
      gridColumn: p[0]?p[0] + "/ span " + p[2]:"initial",
      msGridColumnStart: p[0]?p[0]:"initial",
      gridRow: p[1]?p[1] + "/ span " + p[3]:"initial",
      msGridRowStart: p[1]?p[1]:"initial",
      msGridColumnSpan: p[2]?p[2]:"initial",
      msGridRowSpan: p[3]?[3]:"initial",
      //optional
      //for usage, the width and height properties should be null;
      // gridColumnEnd: p[4]?p[4]:"initial",
      // msGridColumnEnd: p[4]?p[4]:"initial",
      // gridRowEnd: p[5]?p[5]:"initial",
      // msGridRowEnd: p[5]?p[5]:"initial",
    }

    return (
      <div style={{...style,...this.props.style}} className={this.props.className}>
        {this.props.children}
      </div>
    );
  }
}

export default GridPos;
