import React, { Component } from 'react';
import Day from '../components/Day'
import TextArea from '../components/TextArea'
import Image from '../components/Image'

class Day23 extends Component {
  render() {
    return (
      <Day title="Dag 23" image="day23/stones7" subtitle="Cairns" gridCols={12} gridRows={7}>
        <TextArea pos={[1, 1, 4, 1]}>
          <h3>
            Krokodillen
          </h3>
          <p>
            De laatste "echte" dag in Australië wilden we nog één dier zien: <b>krokodillen</b>.
            We moesten een eind rijden voor een plek waar we op krokodillen-tour konden.
          </p>
        </TextArea>
        <Image image="day23/crocodile1" pos={[5, 1, 4, 1]} />
        <Image image="day23/crocodile2" pos={[9, 1, 4, 1]} />

        <Image image="day23/crocodile9" bg pos={[1, 2, 3, 1]} />
        <Image image="day23/crocodile4" bg pos={[4, 2, 3, 1]} />
        <Image image="day23/crocodile5" bg pos={[7, 2, 3, 1]} />
        <Image image="day23/crocodile6" bg pos={[10, 2, 3, 1]} />

        <Image image="day23/snake" bg pos={[1, 3, 3, 1]} />
        <Image image="day23/crocodile7" bg pos={[4, 3, 3, 1]} />
        <Image image="day23/crocodile8" bg pos={[7, 3, 3, 1]} />
        <Image image="day23/bird" bg pos={[10, 3, 3, 1]} />

        <Image image="day23/crocodile3" bg pos={[1, 4, 4, 1]} />
        <Image image="day23/crocodile10" pos={[5, 4, 4, 1]} />
        <Image image="day23/crocodile11" pos={[9, 4, 4, 1]} />

        <Image image="day23/flyer" pos={[1, 5, 4, 1]} />
        <TextArea pos={[5, 5, 4, 1]}>
          <h3>
            Stenen
          </h3>
          <p>
            Op de terugweg, weer richting Cairns, zagen we een vreemde verschijning:
            Honderden <b>stenenstapels</b>. Ik weet niet wat het is en waarom het bestaat,
            maar wel dat het er gaaf uitziet en je natuurlijk zelf een stapel toe moet voegen wat wij natuurlijk gedaan hebben.
          </p>
        </TextArea>
        <Image image="day23/stones4" bg pos={[9, 5, 4, 2]} />

        <Image image="day23/stones2" pos={[1, 6, 4, 1]} />
        <Image image="day23/stones3" pos={[5, 6, 4, 1]} />

        <Image image="day23/stones5" pos={[1, 7, 4, 1]} />
        <Image image="day23/stones6" pos={[5, 7, 4, 1]} />
        <Image image="day23/stones8" pos={[9, 7, 4, 1]} />
      </Day >
    );
  }
}

export default Day23;


