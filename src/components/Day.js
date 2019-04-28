import React, { Component } from 'react';
import Header from '../components/Header';
import TrackVisibility from 'react-on-screen';
import './Day.css';

class Day extends Component {
  render() {
    let rows = [];
    for (let r = 0; r < this.props.gridRows; r++) {
      rows.push("1fr");
    }
    let cols = [];
    for (let c = 0; c < this.props.gridCols; c++) {
      cols.push("1fr");
    }

    let style = {
      display: "grid",
      gridTemplateRows: rows.join(" "),
      gridTemplateColumns: cols.join(" "),
    }

    return (
      <TrackVisibility partialVisibility offset={1000} >
        {({ isVisible }) => isVisible ?
          <div className="Day">
            <Header title={this.props.title} image={this.props.image} subtitle={this.props.subtitle} parallax />
            <div className="background" style={{ backgroundImage: "url(" + this.props.image + ".jpg)" }} />
            <div className="background" />
            <div style={style}>
              {this.props.children}
              <div style={{ clear: "both" }} />
            </div>
          </div> :
          <div style={{ height: (this.props.gridRows * 45) + "vh" }}>
          </div>
        }
      </TrackVisibility>
    );
  }
}

export default Day;
