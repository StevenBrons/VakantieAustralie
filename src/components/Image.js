import React, { Component } from 'react';
import { Watch } from 'scrollmonitor-react';
import GridPos from '../components/GridPos';
import './Image.css';

const RESULUTION = "medium_res";

class Image extends Component {

  render() {
    let className = "Image " + this.props.cName;

    if (this.props.onViewportAnimation && this.props.isInViewport) {
      className += " " + this.props.onViewportAnimation;
    }

    let style = {};
    if (this.props.block) {
      style = {
        width: "100px",
        height: "100px",
      }
    }

    return (
      <GridPos className={className} pos={this.props.pos} style={style}>
        {this.props.bg ?
          <div style={{ ...{ backgroundImage: "url(./" + RESULUTION + "/" + this.props.image + ".JPG)" }, ...style }} />
          :
          <img src={"./" + RESULUTION + "/" + this.props.image + ".JPG"} alt={""} />
        }
      </GridPos>
    );
  }
}

export default Watch(Image);
