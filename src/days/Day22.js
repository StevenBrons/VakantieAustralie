import React, { Component } from 'react';
import Day from '../components/Day'
import TextArea from '../components/TextArea'
import Image from '../components/Image'
import Header from '../components/Header'

class Day22 extends Component {
  render() {
    return (
      <Day title="Dag 22" image="day22/train5" subtitle="Cairns" gridCols={12} gridRows={7}>
        <Image image="day22/train1" pos={[1, 1, 4, 1]} />
        <Image image="day22/waterfall1" pos={[5, 1, 4, 1]} />
        <TextArea pos={[9, 1, 4, 1]}>
          <h3>
            Kuranda Scenic Railway
          </h3>
          <p>
            We gingen vandaag met een oude trein het regenwoud naast Cairns in.
            Onderweg reden we lang twee watervallen, waarbij we bij de tweede een korte stop maakten.
          </p>
        </TextArea>

        <Image image="day22/waterfall2" bg pos={[1, 2, 4, 2]} />
        <Image image="day22/train4" pos={[5, 2, 4, 1]} />
        <Image image="day22/waterfall3" pos={[9, 2, 4, 1]} />

        <TextArea pos={[5, 3, 4, 1]} >
          <h3>
            Souvenier dorp
          </h3>
          <p>
            De trein bracht ons op onze bestemming: <b>Kuranda</b>.
            Dit aboriginal dorp was omgetovert tot een sourvenir-fabriek, met souvenier winkels zover het oog reikt.
          </p>
        </TextArea>
        <Image image="day22/wreck" pos={[9, 3, 4, 1]} />
        <Header image="day22/village1" height="100%" parallax pos={[1, 4, 12, 2]} />

        <TextArea pos={[1, 6, 4, 1]}>
          <h3>
            Skyrail
          </h3>
          <p>
            Een aantal boemerangs en andere ornamenten rijker verlieten we Kuranda.
            Dit deden we niet weer met de trein maar via een mega lange <b>Skyrail</b>!
          </p>
        </TextArea>
        <Image image="day22/skyrail1" pos={[5, 6, 4, 1]} />
        <Image image="day22/skyrail2" pos={[9, 6, 4, 1]} />
        <Image image="day22/skyrail3" pos={[1, 7, 4, 1]} />
        <Image image="day22/skyrail4" pos={[5, 7, 4, 1]} />
        <Image image="day22/skyrail5" pos={[9, 7, 4, 1]} />

      </Day >
    );
  }
}

export default Day22;


