import React, { Component } from 'react';
import Day from '../components/Day'
import Image from '../components/Image'
import TextArea from '../components/TextArea'

class Day19 extends Component {
  render() {
    return (
      <Day title="Dag 19" image="day19/treehouse4" subtitle="Atherton Tablelands" gridCols={12} gridRows={3}>
        <Image image="day19/detour1" pos={[1, 1, 4, 1]} />
        <Image image="day19/detour3" pos={[5, 1, 4, 1]} />
        <TextArea pos={[9, 1, 4, 1]}>
          <h3>
            Rose Gums wilderness retreat
          </h3>
          <p>
            De volgende dag was het weer een flink stuk rijden, dit keer meer richting het binnenland.
            Onderweg hebben we nog een waterval bezocht.
          </p>
        </TextArea>
        <Image image="day19/detour4" pos={[1, 2, 4, 1]} />
        <Image image="day19/emu" pos={[5, 2, 4, 1]} />
        <Image image="day19/waterfall5" pos={[9, 2, 4, 1]} />

        <Image image="day19/flower" pos={[1, 3, 4, 1]} />
        <Image image="day19/treehouse1" pos={[5, 3, 4, 1]} />
        <Image image="day19/moon" pos={[9, 3, 4, 1]} />
      </Day >
    );
  }
}

export default Day19;


