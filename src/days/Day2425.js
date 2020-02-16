import React, { Component } from 'react';
import Day from '../components/Day'
import TextArea from '../components/TextArea'
import Image from '../components/Image'

class Day2425 extends Component {
  render() {
    return (
      <Day title="Dag 24/25" image="day24_25/sea" subtitle="Cairns" gridCols={3} gridRows={2}>
        <TextArea pos={[1, 1, 3, 1]}>
          <h3>
            De laatste dag
          </h3>
          <p>
            Vanuit het vliegveld van <b>Cairns</b> vlogen we, weer via Hong Kong, terug naar Nederland.
            Ik hoop dat ook jij al lezer een mooie reis hebt gemaakt!
          </p>
          <p>
            <center>
              <span style={{ fontFamily: "Brush Script MT, Brush Script Std, cursive", fontSize: "4em" }}>The End</span>
            </center>
          </p>
        </TextArea>
        <Image image="day24_25/airport" pos={[1, 2, 1, 1]} />
        <Image image="day24_25/airplane" pos={[2, 2, 1, 1]} />
        <Image image="day24_25/airport2" pos={[3, 2, 1, 1]} />
      </Day >
    );
  }
}

export default Day2425;


