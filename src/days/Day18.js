import React, { Component } from 'react';
import Day from '../components/Day'
import Image from '../components/Image'
import TextArea from '../components/TextArea'
import Header from '../components/Header'
import Video from '../components/Video'

class Day18 extends Component {
  render() {

    const x = <span style={{ color: "#a00000" }} >KOALA'S GESPOT!</span>;

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
        <TextArea pos={[1, 3, 8, 1]}>
          <h3>
            Horseshoe Bay
          </h3>
          <p>
            We namen de bus naar <b>Horseshoe Bay</b>.
            Hier hebben we op een terrass wat gegeten.
            Ook kregen we te horen dat er twee snorkel-trails waren.
            We hebben hierna de bus naar <b>Florence Bay</b> genomen, op zoek naar de snorkel-routes.
          </p>
          <p>
            Nadat we een tijd lang te hebben gesnoreld tussen het koraal bleek de snorkel-route niet hier te zijn maar bij <b>Arthur Bay</b>.
            Hier zijn we vervolgens naartoe gegaan (weer een busreisje).
          </p>
        </TextArea>
        <Image image="day18/florence_bay" pos={[9, 3, 4, 1]} />
        <Image image="day18/aquarium1" pos={[1, 4, 4, 1]} />
        <TextArea pos={[5, 4, 4, 1]}>
          <h3>
            Snorkelen
          </h3>
          <p>
            Omdat hier geen foto's van zijn heb ik hier twee foto's die we bij een aquarium gemaakt hebben ter vervanging.
            Het echt koraal had een stuk minder kleur en minder grote vissen, maar was toch zeker cool om te zien!
          </p>
        </TextArea>
        <Image image="day18/aquarium2" pos={[9, 4, 4, 1]} />
        <TextArea pos={[1, 5, 4, 1]}>
          <h3>
            Koala jacht!
          </h3>
          <p>
            Op Magnetic Island zouden <b>wilde koala's</b> zitten!
            Die konden we natuurlijk niet links laten liggen.
            Het liep al tegen de avond (de tijd dat koala's het meest "actief" zijn),
            toen we de klim naar een oud WOII-ford begonnen.
          </p>
        </TextArea>
        <Image image="day18/koala_walk2" bg pos={[5, 5, 4, 2]} />
        <Image image="day18/koala_walk1" pos={[9, 5, 4, 1]} />
        <Image image="day18/koala_walk4" pos={[1, 6, 4, 1]} />
        <Image image="day18/koala_walk6" pos={[9, 6, 4, 1]} />
        <Header image="day18/koala_walk5" title={x} parallax height="100%" pos={[1, 7, 12, 1]} />

        <Image image="day18/wild_koala2" pos={[1, 11, 4, 1]} />
        <Image image="day18/wild_koala3" pos={[5, 11, 4, 1]} />
        <Image image="day18/wild_koala6" pos={[9, 11, 4, 1]} />

        <Image image="day18/wild_koala5" bg pos={[1, 12, 4, 1]} />
        <Video video="wild_koala_eating" verticalScaling pos={[5, 12, 4, 1]} />
        <Image image="day18/wild_koala4" bg pos={[9, 12, 4, 2]} />

        <Image image="day18/wild_koala7" bg pos={[1, 13, 4, 1]} />
        <Image image="day18/wild_koala8" pos={[5, 13, 4, 1]} />
      </Day >
    );
  }
}

export default Day18;


