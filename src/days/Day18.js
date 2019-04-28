import React, { Component } from 'react';
import Day from '../components/Day'
import Image from '../components/Image'
import TextArea from '../components/TextArea'

class Day18 extends Component {
  render() {
    return (
      <Day title="Dag 18" image="day18/koala_walk4" subtitle="Townsville" gridCols={12} gridRows={7}>
        <TextArea pos={[1, 1, 4, 1]}>
          <h3>
            Magnetic Island
          </h3>
          <p>
            Met een van de eerste ferries vertrokken vandaag naar <b>Magnetic Island</b>, het eiland aan de kust van Townsville
          </p>
        </TextArea>
        <Image image="day18/ferry" pos={[5, 1, 4, 1]} />
        <Image image="day18/ferry2" pos={[9, 1, 4, 1]} />
        <TextArea pos={[5, 2, 4, 1]}>
          <h3>
            Nelly Bay
          </h3>
          <p>
            Eenmaal op het eiland aangekomen besloten we, zonder duidelijke rede, om naar <b>Nelly Bay</b> te gaan.
            Daar aangekomen wist niemand waarom we eigenlijk hier naartoe waren gegaan.
            De volgende bus zou over een uur komen, dus hebben we maar in een restaurant ijs gegeten.
          </p>
        </TextArea>
        <Image image="day18/map" pos={[1, 2, 4, 1]} />
        <Image image="day18/nelly_bay" pos={[9, 2, 4, 1]} />
        <TextArea pos={[1, 3, 4, 1]}>
          <h3>
            Horseshoe Bay
          </h3>
          <p>
            We namen de bus naar <b>Horseshoe Bay</b>.
            Hier hebben we op een terrass wat gegeten.
            Ook kregen we te horen dat er twee snorkel-trails waren.
            We hebben hierna de bus naar <b>Florence Bay</b> genomen, op zoek naar de snorkel-routes.
          </p>
        </TextArea>
      </Day >
    );
  }
}

export default Day18;


