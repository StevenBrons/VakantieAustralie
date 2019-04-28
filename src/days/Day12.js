import React, { Component } from 'react';
import Day from '../components/Day'
import Image from '../components/Image'
import TextArea from '../components/TextArea';

class Day12 extends Component {
  render() {
    return (
      <Day title="Dag 12" image="day12/sunset3" subtitle="Fraser Island" gridCols={3} gridRows={3}>
        <Image image="day12/walk1" pos={[1,1,1,1]}/>
        <TextArea pos={[2,1,1,1]}>
          <h3>
            Wandeling
          </h3>
          <p>
            Omdat je zonder four weel drive nergens kunt komen hebben we maar een wandeling rond het resort gemaakt.
            Onderweb kwamen we nog een boom met allerlei sporen van de larve van <b>The Scribbly Gum</b>, een soort mot.
          </p>
        </TextArea>
        <Image image="day12/walk5" pos={[3,1,1,1]}/>

        <Image image="day12/walk3" pos={[1,2,1,1]}/>
        <Image image="day12/walk4" pos={[2,2,1,1]}/>
        <Image image="day12/walk6" pos={[3,2,1,1]}/>

        <Image image="day12/sunset1" pos={[1,3,1,1]}/>
        <Image image="day12/sunset4" pos={[2,3,1,1]}/>
        <Image image="day12/sunset2" pos={[3,3,1,1]}/>

      </Day >
    );
  }
}

export default Day12;


