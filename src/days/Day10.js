import React, { Component } from 'react';
import Day from '../components/Day'
import Image from '../components/Image'
import TextArea from '../components/TextArea';

class Day9 extends Component {
  render() {
    return (
      <Day title="Dag 10" image="day10/fraserIsland" subtitle="Fraser Island" gridCols={3} gridRows={5}>
        <Image image="day10/road" pos={[3,1,1,1]}/>
        <TextArea pos={[1,1,2,1]}>
          <h3>
            Op naar Fraser Island
          </h3>
          <p>
            We stonden weer eens vroeg op, dit keer om te gaan rijden naar onze volgende bestemming: <b>Fraser Island</b>.
            Eerst reden we, via een uitgestorven <b>A1</b> naar een haven waar we de auto konden parkeren.
            Op de ferrie zagen we <b>dolfijnen</b> en een <span style={{ textDecoration: "line-through" }}>scheepswrak</span> ton op het strand.
          </p>
          <p>
            Het hele eiland gaf ons het gevoel alsof we in Jurassic Park beland waren.
            Vervang het woord <b>dingo</b> maar in het woord dino, dan zul je de gelijkenis zien.
          </p>
        </TextArea>
        <Image image="day10/hall" pos={[1,2,1,1]} />
        <Image image="day10/house" pos={[2,2,1,1]} />
        <TextArea pos={[3,2,1,1]}>
          <h3>
            Ons appartement
          </h3>
          <p>
            We hadden een behoorlijk appartement op palen, in het bos van het eiland.
            Het hele resort was omringd met een hek om de <b>dingo's</b> buiten te houden die op het eiland rondlopen.
          </p>
        </TextArea>
        <Image image="day10/birds" pos={[1,3,1,1]} />
        <Image image="day10/fraserIsland2" pos={[2,3,1,1]} />
        <Image image="day10/house2" pos={[3,3,1,1]} />

        <Image image="day10/stars4" pos={[1,4,1,1]} />
        <TextArea pos={[2,4,2,1]}>
          <h3>
            Sterrenfoto's
          </h3>
          <p>
            Die avond zijn ik en mijn vader naar de stijger gelopen om daar <b>sterrenfoto's</b> te maken.
            We hebben onder andere een uur in de kou gezeten om de <b>Star Trails</b> te kunnen maken.
          </p>
        </TextArea>

        <Image image="day10/trails1" pos={[1,5,1,1]} />
        <Image image="day10/stars3" pos={[2,5,1,1]} />
        <Image image="day10/trails2" pos={[3,5,1,1]} />
      </Day >
    );
  }
}

export default Day9;


