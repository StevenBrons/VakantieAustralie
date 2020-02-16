import React, { Component } from 'react';
import Day from '../components/Day'
import Image from '../components/Image'
import TextArea from '../components/TextArea';

class Day9 extends Component {
  render() {
    return (
      <Day title="Dag 9" image="day9/beach2" subtitle="Noosaville" gridCols={3} gridRows={4}>
        <Image image="day9/barbecue" pos={[1,1,1,1]} />
        <TextArea pos={[2,1,2,1]}>
          <h3>
            Zon, zee en strand
          </h3>
          <p>
            Vandaag hadden we een rustdag waarin we genoten hebben van de zwembaden en het strand.
            In de avond gebruikten we de publieke barbecue plaats om te <b>barbecueën</b>.
          </p>
        </TextArea>

        <Image image="day9/house" pos={[1,2,1,1]} />
        <Image image="day9/pool2" pos={[2,2,1,1]} />
        <Image image="day9/pool3" pos={[3,2,1,1]} />

        <Image image="day9/beach4" pos={[1,3,3,1]} />

        <Image image="day9/lookout1" pos={[1,4,1,1]} />
        <Image image="day9/lookout3" pos={[2,4,1,1]} />
        <Image image="day9/lookout2" pos={[3,4,1,1]} />
      </Day >
    );
  }
}

export default Day9;


