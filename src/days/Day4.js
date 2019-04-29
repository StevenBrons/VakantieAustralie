import React, { Component } from 'react';
import Day from '../components/Day'
import Image from '../components/Image'
import Video from '../components/Video'
import Stack from '../components/Stack'
import TextArea from '../components/TextArea';

class Day4 extends Component {
  render() {
    return (
      <Day title={"Dag 4"} image={"day4/aquarium7"} subtitle={"Sydney"} gridCols={3} gridRows={3}>
        <Video video="aquarium4" pos={[1, 1, 1, 1]} />
        <TextArea pos={[2, 1, 1, 1]}>
          <h3>
            Sydney Aquarium
          </h3>
          <p>
            De tweede dag in Sydney gebruikten we onze Opal kaarten om met de bus naar het <b>Sydney Aquarium</b> te gaan.
          </p>
        </TextArea>
        <Stack pos={[3, 1, 1, 1]}>
          <Image image="day4/aquarium1" bg />
          <Image image="day4/aquarium3" bg />
          <Image image="day4/aquarium5" bg />
          <Image image="day4/aquarium2" bg />
          <Image image="day4/aquarium6" bg />
          <Image image="day4/aquarium8" bg />
        </Stack>
        <Image image="day4/aquarium4" pos={[1, 2, 1, 1]} />
        <Image image="day4/aquarium10" pos={[2, 2, 1, 1]} />
        <Image image="day4/aquarium9" pos={[3, 2, 1, 1]} />

        <Image image="day4/ferry3" pos={[1, 3, 1, 1]} />
        <TextArea pos={[2, 3, 1, 1]}>
          <h3>
            Bondi Beach
          </h3>
          <p>
            Na het aquarium bekeken te hebben gingen we op weg naar het wereldberoemde <b>Bondi Beach</b>.
            Vanuit het aquarium pakten we de metro naar de <b>Circular Quay</b>.
            Hier namen we een ferry naar <b>Watsons Bay</b>.
            Uiteindelijk kwamen we aan bij Bondi Beach, waar we de rest van de dag verbleven.
          </p>
        </TextArea>
        <Image image="day4/bondi1" pos={[3, 3, 1, 1]} />
      </Day >
    );
  }
}

export default Day4;


