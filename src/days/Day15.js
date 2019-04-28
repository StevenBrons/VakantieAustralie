import React, { Component } from 'react';
import Day from '../components/Day'
import Image from '../components/Image'
import TextArea from '../components/TextArea';
import Header from '../components/Header';

class Day15 extends Component {
  render() {
    return (
      <Day title="Dag 15" image="day15/sea6" subtitle="Airlie Beach" gridCols={3} gridRows={5}>
        <TextArea pos={[1, 1, 1, 1]}>
          <h3>Whitsundays</h3>
          <p>
            Vandaag moesten we voor de zoveelste keer vroeg op.
            We hadden een tocht met een paarse catamaran geboekt.
            We zeilden naar de <b>whitsundays</b>, de eilanden voor de kust van Airlie Beach.
            Onderweg zagen we nog een walvis-staart!
          </p>
        </TextArea>
        <Image image="day15/boat1" pos={[2, 1, 1, 1]} />
        <Image image="day15/boat3" bg pos={[3, 1, 1, 2]} />
        <Image image="day15/boat5" pos={[1, 2, 1, 1]} />
        <Image image="day15/whale" pos={[2, 2, 1, 1]} />
        <Image image="day15/sea7" pos={[1, 3, 1, 1]} />
        <TextArea pos={[2, 3, 1, 1]}>
          <h3>Snorkelen</h3>
          <p>
            We kwamen aan op onze <b>snorkel</b> locatie.
            Met onze anti-sting suits aan gingen we het ijkoude water in om daar de
            koralen van <b>The Great Barrier Reef</b> te bewonderen
          </p>
        </TextArea>
        <Image image="day15/snorkling" pos={[3, 3, 1, 1]} />

        <TextArea pos={[1, 4, 1, 1]}>
          <h3>
            Whiteheaven beach
          </h3>
          <p>
            Na het snorkelen zeilden we verder naar het wereldberoemde <b>Whiteheaven beach</b>.
            Het zand daar is zo puur quartz dat het gebruikt is voor de Hubble Telescoop.
            Zand meenemen is strict verboden en kan je een enorme boete opleveren.
          </p>
        </TextArea>
        <Image image="day15/beach1" pos={[2, 4, 1, 1]} />
        <Image image="day15/beach3" pos={[3, 4, 1, 1]} />
        <Image image="day15/sea9" pos={[1, 5, 1, 1]} />
        <Image image="day15/beach4" pos={[2, 5, 1, 1]} />
        <Image image="day15/beach5" pos={[3, 5, 1, 1]} />
        <Header image="day15/sea11" parallax height="100%" pos={[1, 5, 3, 1]} />
      </Day >
    );
  }
}

export default Day15;


