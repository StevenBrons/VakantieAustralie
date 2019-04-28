import React, { Component } from 'react';
import GridPos from '../components/GridPos';
import './Video.css';

const RESOLUTION = "medium_res";

class Image extends Component {
  render() {
    let innerStyle = {
      width: "100%",
      height: "auto",
    }
    if (this.props.verticalScaling) {
      innerStyle = {
        width: "auto",
        height: "100%",
      }
    }

    return (
      <GridPos className="Video" {...this.props}>
        <video autoPlay loop muted style={innerStyle}>
          <source src={"./" + RESOLUTION + "/" + this.props.video + ".mp4"} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </GridPos>
    );
  }
}

export default Image;
