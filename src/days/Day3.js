import React, { Component } from 'react';
import Day from '../components/Day'
import Image from '../components/Image'
import Video from '../components/Video'
import TextArea from '../components/TextArea';
import Stack from '../components/Stack';

class Day1 extends Component {
  render() {
    return (
      <Day title={"Dag 3"} image={"day3/operaAndBridge"} subtitle={"Sydney"} gridCols={12} gridRows={8}>
        <TextArea pos={[1, 1, 8, 1]}>
          <h3>
            Royal Botanic Gardens
          </h3>
          <p>
            Na een vlucht van 8 uur kwamen we om 9 uur in Sydney aan.
            We namen een taxi het <b>Cambridge</b> hotel.
            Na de bagage in het hotel gelegd te hebben gingen een stuk door Sydney lopen beginnend bij de <b>Royal Botanic Gardens</b>.
          </p>
        </TextArea>
        <Image image="day3/gardens2" bg pos={[1, 2, 4, 1]} />
        <Image image="day3/gardens5" pos={[5, 2, 4, 1]} />
        <Image image="day3/gardens12" bg pos={[9, 1, 4, 2]} />

        <Image image="day3/gardens1" pos={[1, 3, 4, 1]} />
        <Video video="day3/gardens" verticalScaling pos={[5, 3, 4, 1]} />
        <Image image="day3/gardens9" pos={[9, 3, 4, 1]} />

        <Image image="day3/gardens3" pos={[1, 4, 4, 1]} />
        <Image image="day3/gardens13" pos={[5, 4, 4, 1]} />
        <Image image="day3/gardens15" pos={[9, 4, 4, 1]} />

        <TextArea pos={[1, 5, 6, 1]}>
          <h3>
            Opera House en Harbour Bridge
          </h3>
          <p>
            Vanuit de gardens kwamen we uit in de haven met daar recht voor ons het beroemde <b>opera gebrouw</b> met daar achter de <b>Harbour Bridge</b>.
          </p>
        </TextArea>
        <Image image="day3/gardens17" bg pos={[7, 5, 6, 1]} />

        <Image image="day3/opera1" pos={[1, 6, 4, 1]} />
        <TextArea pos={[5, 6, 8, 1]}>
          <p>
            We liepen naar de haven <b>Circular Quay</b>.

            In de provintie <b>New South Wales</b> geldt een openbaar-vervoer kaart: <b>een Opal kaart</b>, we konden zo snel geen plek vinden waar ze die verkochten dus
            kochten we, lang debat, een kaartje voor de ferry naar een vrij willekeurig gekozen plek.

            We hadden echter zoveel tijd aan discussieren besteed dat de ferrie waar we een kaartje voor hadden al weg was.
            De kaartjes hadden we al, dus moesten we maar een uur wachten. Intussen vonden we ook een plek om een Opal kaart te kopen, waarmee we elke ferrie hadden kunnen pakken.... zucht...
          </p>
        </TextArea>
        <Stack pos={[1, 7, 4, 1]} speed="slow">
          <Image image="day3/bridge2" bg />
          <Image image="day3/opera4" bg />
        </Stack>
        <Stack pos={[5, 7, 4, 1]} speed="slow">
          <Image image="day3/opera6" bg />
          <Image image="day3/bridge3" bg />
        </Stack>
        <Stack pos={[9, 7, 4, 1]} speed="slow">
          <Image image="day3/opera9" bg />
          <Image image="day3/opera11" bg />
        </Stack>

        <Image image="day3/gardenIsland" pos={[9, 8, 4, 1]} />
        <TextArea pos={[1, 8, 8, 1]}>
          <h3>
            Ons ferry avontuur
          </h3>
          <p>
            Met de laatste ferry gingen we uiteindelijk op weg. Na een paar minuten aan varen kwamen we op onze bestemming: <b>Garden Island</b>.
            Een maal daar aangekomen kwamen we er achter dat deze plek uitgestorven was en bovendien volledig omringd groot hek met daarachter een <b>militaire basis</b>.
            We zaten dus vast.
            Gelukkig kwam dezelfde ferry een aantal minuten later om ons van dit militaire-schiereiland te redden.
          </p>
        </TextArea>
      </Day >
    );
  }
}

export default Day1;


