import React, { Component } from 'react';
import Day from '../components/Day'
import Image from '../components/Image'
import TextArea from '../components/TextArea'

class Day21 extends Component {
  render() {
    return (
      <Day title="Dag 21" image="day21/resort5" subtitle="Cairns" gridCols={12} gridRows={5}>
        <TextArea pos={[1, 1, 4, 1]}>
          <h3>
            Trinity Beach
          </h3>
          <p>
            We zijn nu aangekomen bij onze laatste locatie: <b>Cairns</b>.
            Hier verbleven we in het <b>Trinity Beach</b> resort.
            Het resort had een eigen zwembad en (zoals veel plekken in Australië) een openbare barbecue plaats.
          </p>
        </TextArea>
        <Image image="day21/sign" bg pos={[5, 1, 4, 2]} />
        <Image image="day21/appartment2" pos={[9, 1, 4, 1]} />

        <Image image="day21/appartment1" bg pos={[1, 2, 4, 2]} />
        <Image image="day21/resort2" pos={[9, 2, 4, 1]} />

        <Image image="day21/resort1" pos={[5, 3, 4, 1]} />
        <Image image="day21/resort4" pos={[9, 3, 4, 1]} />

        <Image image="day21/resort6" pos={[1, 4, 4, 1]} />
        <Image image="day21/resort7" pos={[5, 4, 4, 1]} />
        <Image image="day21/resort3" pos={[9, 4, 4, 1]} />

        <Image image="day21/beach1" pos={[1, 5, 4, 1]} />
        <Image image="day21/beach2" pos={[5, 5, 4, 1]} />
        <Image image="day21/beach3" pos={[9, 5, 4, 1]} />
      </Day >
    );
  }
}

export default Day21;


