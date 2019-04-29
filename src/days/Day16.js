import React, { Component } from 'react';
import Day from '../components/Day'
import Video from '../components/Video';
import GridPos from '../components/GridPos';

class Day16 extends Component {
  render() {
    return (
      <Day title="Dag 16" image="day16/view" subtitle="Airlie Beach" gridCols={1} gridRows={1}>
        <GridPos pos={[1, 1, 1, 1]}>
          <Video style={{ width: "50%", display: "inline-block" }} video="boats" />
          <Video style={{ width: "50%", display: "inline-block" }} video="sunset" />
        </GridPos>
      </Day >
    );
  }
}

export default Day16;


