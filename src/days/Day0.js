import React, { Component } from 'react';
import Day from '../components/Day'
import Image from '../components/Image'
import Video from '../components/Video'
import TextArea from '../components/TextArea';

class Day0 extends Component {
  render() {
    return (
      <Day title={"Dag 0"} image={"day0/airplane"} subtitle={"Frankfurt"} gridCols={3} gridRows={1}>
        <Video video="day0/timelapseToAirport" pos={[1,1,1,1]}/>
        <TextArea pos={[2,1,1,1]}>
          <h3>
            Naar het vliegveld
          </h3>
          <p>
            Om zes uur 's ochtends Nederlandse tijd begint onze reis.
            Met de dakdragers van ons surfavontuur van de dag ervoor nog op de auto voor een optimale airodynamica, vertrokken we naar <b>Frankfurt</b> voor onze eerste vlucht naar Hong Kong.
          </p>
          <p>
            De <b>vlucht naar Hong Kong</b> duurde elf uur, met een tijdverschil van zes uur. Na een film te hebben gekeken en het langverwachte vliegtuigvoedsel te hebben gegeten ging ik slapen, of tja, mijn ogen dichtdoen.
          </p>
        </TextArea>
        <Image image={"day0/airplaneFood"} pos={[3,1,1,1]}  />
      </Day >
    );
  }
}

export default Day0;


