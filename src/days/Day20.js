import React, { Component } from 'react';
import Day from '../components/Day'
import Image from '../components/Image'
import TextArea from '../components/TextArea'
import Header from '../components/Header'
import Video from '../components/Video'

class Day20 extends Component {
  render() {
    return (
      <Day title="Dag 20" image="day20/clouds" subtitle="Atherton Tablelands" gridCols={12} gridRows={7}>
      </Day >
    );
  }
}

export default Day20;


