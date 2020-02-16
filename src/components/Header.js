import React, { Component } from 'react';
import GridPos from '../components/GridPos';
import './Header.css';

const RESOLUTION = "high_res";

class Header extends Component {
  render() {
    let style = {
      height: this.props.height ? this.props.height : this.props.image ? "500px" : "150px",
      backgroundImage: this.props.image && "url(./" + RESOLUTION + "/" + this.props.image + ".JPG)",
      backgroundAttachment: this.props.parallax ? "fixed" : "scroll",
    }

    return (
      <GridPos className="Header" pos={this.props.pos}>
        <div style={style}>
          <div>
            <h1>
              {this.props.title}
            </h1>
            {this.props.subtitle &&
              <h3>
                {this.props.subtitle}
              </h3>
            }
          </div>
        </div>
      </GridPos>
    );
  }
}

export default Header;
