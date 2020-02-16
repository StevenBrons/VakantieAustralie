import React, { Component } from 'react';
import Day from '../components/Day'
import Image from '../components/Image'
import TextArea from '../components/TextArea';

class Day8 extends Component {
  render() {
    return (
      <Day title={"Dag 8"} image={"day8/lookout1"} subtitle={"Noosaville"} gridRows={3} gridCols={6}>
        <Image image="day8/walk1" bg pos={[1,1,3,1]} />
        <Image image="day8/walk2" bg pos={[4,1,3,1]} />
        <TextArea pos={[1,2,6,1]}>
          <h3>
            Tropisch paradijs
          </h3>
          <p>
            We waren beland in een tropisch paradijs met palmbomen, zwembaden en strand.
            We hadden hier een apartement in plaats van hotelkamers.
            We hebben een wandeling gemaakt door het regenwoud wat ons naar een mooi <b>uitzichtpunt</b> bracht.
          </p>
        </TextArea>
        <Image image="day8/beach1" pos={[1,3,2,1]} />
        <Image image="day8/lookout3" pos={[3,3,2,1]} />
        <Image image="day8/lookout2" pos={[5,3,2,1]} />
      </Day >
    );
  }
}

export default Day8;


