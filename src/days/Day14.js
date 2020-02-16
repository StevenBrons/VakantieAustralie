import React, { Component } from 'react';
import Day from '../components/Day'
import Image from '../components/Image'
import TextArea from '../components/TextArea';
import Video from '../components/Video';

class Day14 extends Component {
  render() {
    return (
      <Day title="Dag 14" image="day14/airley_beach1" subtitle="Airlie Beach" gridCols={3} gridRows={5}>
        <Image image="day14/police" pos={[1, 1, 1, 1]} />
        <TextArea pos={[2, 1, 1, 1]}>
          <h3>
            Airlie Beach
          </h3>
          <p>
            Vandaag stond weer een lange reisdag op de planning.
            <b> 465 kilometer</b> verder en $210 aan boete lichter kwamen we aan in <b>Airlie Beach</b>.
          </p>
        </TextArea>
        <Image image="day14/airley_beach2" pos={[3, 1, 1, 1]} />

        <Image image="day14/apartment1" pos={[1, 2, 1, 1]} />
        <Image image="day14/apartment2" pos={[2, 2, 1, 1]} />
        <Image image="day14/apartment5" bg pos={[3, 2, 1, 2]} />
        <Image image="day14/apartment3" pos={[1, 3, 1, 1]} />
        <Image image="day14/apartment4" pos={[2, 3, 1, 1]} />
        <TextArea pos={[1, 4, 1, 1]}>
          <h3>
            Lagoon
          </h3>
          <p>
            Omdat je voor een deel van het jaar niet in de zee
            kon zwemmen is er een groot zwembad aangelegd voor de vele toeristen.
          </p>
        </TextArea>
        <Image image="day14/lagoon1" pos={[2, 4, 1, 1]} />
        <Image image="day14/lagoon3" pos={[3, 4, 1, 1]} />
        <Image image="day14/lagoon2" pos={[1, 5, 1, 1]} />
        <Video pos={[2, 5, 1, 1]} video="airley_beach_sunset" />
        <Image image="day14/lagoon4" pos={[3, 5, 1, 1]} />
      </Day >
    );
  }
}

export default Day14;


