import React, { Component } from 'react';

import Day from '../components/Day'
import KoalaMemory from '../components/KoalaMemory'
import Image from '../components/Image'
import Video from '../components/Video'
import Stack from '../components/Stack'
import TextArea from '../components/TextArea';

class Day7 extends Component {
  render() {
    return (
      <Day title={"Dag 7"} image={"day7/koala1"} subtitle={"Noosaville"} gridCols={6} gridRows={12}>
        <TextArea pos={[1, 1, 6, 1]}>
          <h3>
            Slapende koala's
          </h3>
          <p>
            Vandaag was het <b>koala</b> dag: <span style={{ color: "darkred", fontWeight: "bolder" }} > <i>be prepared!</i></span>
          </p>
          <p>
            Al om tien uur 's ochtends stonden we in het <b>Lone Pine Koala Sanctuary</b>.
            De koala's konden onze vroege komst niet bepaald waarderen en bleven rustig doorslapen.
            Tja, dan maar foto's van slapende koala's hè.
          </p>
        </TextArea>
        <KoalaMemory pos={[1, 2, 6, 2]} />
        <Image image="day7/emu2" pos={[1, 4, 2, 1]} />
        <TextArea pos={[3, 4, 2, 1]}>
          <h3>
            Andere dieren
          </h3>
          <p>
            Naast koala's waren er (gelukkig) ook nog andere dieren zoals <b>dingo's</b>, <b>emu's</b> en slangen.
          </p>
          <p>
            Er waren ook een helebool <b>Regenbooglori Papegaaien</b> die je kon voeren.
          </p>
        </TextArea>
        <Stack pos={[5, 4, 2, 1]}>
          <Image image="day7/lizard" bg />
          <Image image="day7/snake" bg />
          <Image image="day7/dingo" bg />
          <Image image="day7/emu1" bg />
        </Stack>

        <Image image="day7/bird2" pos={[1, 5, 2, 1]} />
        <Image image="day7/bird3" pos={[3, 5, 2, 1]} />
        <Image image="day7/bird4" pos={[5, 5, 2, 1]} />

        <TextArea pos={[1, 6, 2, 1]}>
          <h3>
            Kangoeroe's
          </h3>
          <p>
            Er was ook een grote <b>kangoeroe weide</b> waar je kangoeroes kon voeren en aaien.
          </p>
          <p>
            Uiteindelijk hebben we ook nog wat <b>actiefoto's</b> van koala's kunnen maken.
          </p>
        </TextArea>
        <Image image="day7/kangaroo1" pos={[3, 6, 2, 1]} />
        <Image image="day7/kangaroo2" pos={[5, 6, 2, 1]} />

        <Image image="day7/actionKoala7" pos={[1, 7, 2, 1]} onViewportAnimation="animation3" />
        <Image image="day7/actionKoala5" pos={[3, 7, 2, 1]} onViewportAnimation="animation2" />
        <Video video="flyingKoala" pos={[5, 7, 2, 1]} />

        <Image image="day7/actionKoala8" bg pos={[1, 8, 3, 1]} onViewportAnimation="animation1" />
        <Image image="day7/babyKoala" bg pos={[4, 8, 3, 1]} />

        <Image image="day7/lookout6" pos={[1, 9, 6, 1]} />

        <TextArea pos={[1, 10, 12, 1]}>
          <h3>
            Uitzichtpunt
          </h3>
          <p>
            Ontsnapt uit het negende terras van koalahel gingen we verder met de auto, op weg naar <b>Noosaville</b>.
            Onderweg kamen we nog een mooi uitzichtpunt tegen waar we in de verte een laatste blik op Brisbane konden werpen.
            Uiteindelijk kwamen we aan bij onze verblijfplaats: <b>Coral Beach Resort</b>.
          </p>
        </TextArea>

        <Image image="day7/lookout2" bg pos={[1, 11, 2, 1]} />
        <Image image="day7/lookout4" bg pos={[3, 11, 2, 1]} />
        <Image image="day7/lookout3" bg pos={[5, 11, 2, 1]} />
        <Image image="day7/coralBeachResort1" bg pos={[1, 12, 3, 1]} />
        <Image image="day7/coralBeachResort2" bg pos={[4, 12, 3, 1]} />
      </Day >
    );
  }
}

export default Day7;


