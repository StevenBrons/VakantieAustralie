import React, { Component } from 'react';
import Day from '../components/Day'
import Image from '../components/Image'
import TextArea from '../components/TextArea';

class Day13 extends Component {
  render() {
    return (
      <Day title="Dag 13" image="day13/zoo1" subtitle="Rockhampton" gridCols={4} gridRows={10}>
        <Image image="day13/lunch_stop" pos={[1, 1, 1, 1]} />
        <TextArea pos={[2, 1, 2, 1]}>
          <h3>Vertrek Fraser Island</h3>
          <p>
            Al 's ochtends vroeg vertrokken van Fraser Island.
            Vandaag was een reisdag waarin we van ongeveer 450 kilometer naar het noorden reden, naar <b>Rockhampton</b>.
          </p>
        </TextArea>
        <Image image="day13/rockhampton" pos={[4, 1, 1, 1]} />

        <TextArea pos={[1, 2, 1, 1]}>
          <h3>
            Botanic Gardens
          </h3>
          <p>
            In Rockhampton hebben we de Botanic Gardens bezocht.
          </p>
        </TextArea>
        <Image image="day13/garden" pos={[2, 2, 1, 1]} />
        <Image image="day13/garden2" pos={[3, 2, 1, 1]} />
        <Image image="day13/garden3" pos={[4, 2, 1, 1]} />

        <Image image="day13/garden4" pos={[1, 3, 1, 1]} />
        <Image image="day13/garden5" pos={[2, 3, 1, 1]} />
        <Image image="day13/garden6" pos={[3, 3, 1, 1]} />
        <Image image="day13/garden7" bg pos={[4, 3, 1, 2]} />

        <Image image="day13/garden8" pos={[1, 4, 1, 1]} />
        <Image image="day13/garden15" pos={[2, 4, 1, 1]} />
        <Image image="day13/garden10" pos={[3, 4, 1, 1]} />

        <Image image="day13/garden11" pos={[1, 5, 1, 1]} />
        <Image image="day13/garden12" pos={[2, 5, 1, 1]} />
        <Image image="day13/garden13" pos={[3, 5, 1, 1]} />
        <Image image="day13/garden14" pos={[4, 5, 1, 1]} />

        <Image image="day13/zoo2" pos={[1, 6, 1, 1]} />
        <TextArea pos={[2, 6, 1, 1]}>
          <h3>
            Rockhampton Zoo
          </h3>
          <p>
            Naast de Botanic Gardens lag een (gratis!) dierentuin: de <b>Rockhampton Zoo</b>.
          </p>
        </TextArea>
        <Image image="day13/zoo3" pos={[3, 6, 1, 1]} />
        <Image image="day13/zoo6" bg pos={[4, 6, 1, 2]} />

        <Image image="day13/zoo5" pos={[1, 7, 1, 1]} />
        <Image image="day13/zoo7" pos={[2, 7, 1, 1]} />
        <Image image="day13/zoo8" pos={[3, 7, 1, 1]} />

        <TextArea pos={[1, 8, 2, 1]} >
          <h3>
            Capricorn Caves
          </h3>
          <p>
            Het was ondertussen al laat toen we bij de <b>Capricorn Caves</b>, onze overnachtingsplek, aankwamen.
          </p>
          <p>
            Bij onze auto zagen we nog wilde kangoeroes!
            's Avond hebben we nog een prachtig (*ahum) kampvuur gemaakt.
          </p>
        </TextArea>
        <Image image="day13/caves1" pos={[3, 8, 1, 1]} />
        <Image image="day13/caves2" pos={[4, 8, 1, 1]} />

        <Image image="day13/campfire" bg pos={[1, 9, 2, 2]} />
        <Image image="day13/campfire2" bg pos={[3, 9, 2, 2]} />
      </Day >
    );
  }
}

export default Day13;


