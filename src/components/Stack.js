import React, { Component } from 'react';
import GridPos from '../components/GridPos';
import './Stack.css';

class Stack extends Component {

  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      className: "",
    };
  }
  
  componentWillMount() {
    let time;
    switch (this.props.speed) {
      case "slow": time=5000; break;
      case "fast": time=2000; break;
      default: time=3000; break;
    }
    this.interval = setInterval(this.next.bind(this),time)
  }
  
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  next() {
    this.setState({
      current: this.state.current + 1 === React.Children.count(this.props.children) ? 0: this.state.current + 1,
      className: "",
    });
    setTimeout(() => {
      this.setState({
        className: "FadeIn",
      });
    },10);
  }

  onClick() {
    this.next();
  }

  render() {
    let current = React.cloneElement(this.props.children[this.state.current],{
      cName:this.state.className,
    });
    
    return (
      <GridPos pos={this.props.pos}>
        <div className="Stack" onClick={this.onClick.bind(this)} style={this.props.style}>
          {current}
        </div>
      </GridPos>
    );
  }
}

export default Stack;
