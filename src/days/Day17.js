import React, { Component } from 'react';
import Day from '../components/Day'
import TextArea from '../components/TextArea'
import Image from '../components/Image'

class Day17 extends Component {
  render() {
    return (
      <Day title="Dag 17" image="day17/mountain2" subtitle="Townsville" gridCols={12} gridRows={7}>
        <TextArea pos={[1, 1, 4, 1]}>
          <h3>
            Townsville
          </h3>
          <p>
            Ook vandaag werd onze nachtrust niet gespaard.
            's Ochtends vroeg stonden we op voor onze lange reis naar <b>Townsville</b>.
            Onderweg kwamen we nog een lookout tegen, en zagen we onze eerste <b>Train Truck</b>!
          </p>
        </TextArea>
        <Image image="day17/bird1" pos={[5, 1, 4, 1]} />
        <Image image="day17/bird2" pos={[9, 1, 4, 1]} />

        <Image image="day17/lookout1" pos={[1, 2, 4, 1]} />
        <Image image="day17/lookout2" pos={[5, 2, 4, 1]} />
        <Image image="day17/lookout3" bg pos={[9, 2, 4, 2]} />

        <Image image="day17/road_train" bg pos={[1, 3, 4, 1]} />
        <Image image="day17/peach" bg pos={[5, 3, 4, 1]} />

        <Image image="day17/mountain1" pos={[1, 4, 4, 1]} />
        <TextArea pos={[5, 4, 4, 1]}>
          <h3>
            Berg
          </h3>
          <p>
            Townsville werd overschaduwd door een enorme rots.
            We gingen direct door naar ons appartement, maar niet voordat we de rots beklommen (bereden) hadden om daar van het uizicht te genieten.
          </p>
        </TextArea>
        <Image image="day17/mountain3" pos={[9, 4, 4, 1]} />

        <Image image="day17/apartement1" pos={[1, 5, 3, 1]} bg />
        <Image image="day17/apartement2" pos={[4, 5, 3, 1]} bg />
        <Image image="day17/animal2" pos={[7, 5, 3, 1]} bg />
        <Image image="day17/apartement4" pos={[10, 5, 3, 1]} bg />

        <Image image="day17/mountain_lookout1" bg pos={[1, 6, 8, 1]} />
        <Image image="day17/mountain_lookout2" bg pos={[9, 6, 7, 2]} />
        <Image image="day17/magnetic_island1" bg pos={[1, 7, 8, 1]} />

      </Day >
    );
  }
}

export default Day17;


