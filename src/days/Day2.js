import React, { Component } from 'react';
import Day from '../components/Day'
import Image from '../components/Image'
import Stack from '../components/Stack'
import TextArea from '../components/TextArea';

class Day2 extends Component {
  render() {
    return (
      <Day title={"Dag 2"} image="day2/buddha1" subtitle={"Hong Kong"} gridCols={12} gridRows={13}>
        <Image image={"day2/metro"} pos={[1,1,3,1]}/>
        <Image image={"day2/cable6"} pos={[1,2,3,1]} />
        <TextArea pos={[4,1,6,2]}>
          <h3>
            Met de metro
          </h3>
          <p>
            Vandaag besloten we om de <b>Giant Boedha</b> te gaan bekijken. Na in het hotel ontbeten te hebben gingen we op pad naar de metro.
            In de (uiteraard gekoelde) metro was het ontzettend schoon en leeg.
          </p>
          <p>
            We kwamen aan in <b>Ngong Ping</b>, gelegen op hetzelfde eiland als het vliegveld. Vanuit hier konden we een kabelbaan naar de Boedha nemen.
          </p>
        </TextArea>
        <Image image={"day2/cable3"} bg pos={[10,1,3,4]} />
        <Image image={"day2/cable1"} pos={[1,3,3,1]} />
        <Image image={"day2/cable5"} pos={[4,3,3,1]} />
        <Image image={"day2/airport2"} pos={[7,3,3,1]} />
        <TextArea pos={[1,4,9,1]}>
          <h3>
            Boeda dorp
          </h3>
          <p>
            Na de kabelbaan kwamen we aan in een <b>klein toeristen-dorpje</b> aan de voet van de Boedha. Vanuit daar beklommen we de trap naar de Boedha.
          </p>`
        </TextArea>
        <Image image={"day2/village2"} bg pos={[1,5,4,1]} />
        <Image image={"day2/village4"} bg pos={[5,5,4,1]} />
        <Image image={"day2/village5"} bg pos={[9,5,4,1]} />

        <Image image={"day2/buddha2"} bg pos={[1,6,6,2]} />
        <Image image={"day2/buddha3"} bg pos={[7,6,6,2]} />
        <TextArea pos={[1,8,12,1]}>
          <h3>
            Tempel
          </h3>
          <p>
            Na het Boedha beeld van dichtbij te hebben bekeken gingen we de trap weer af op weg naar de tempel.
            Vervolgens hebben we voor het eerst <i>Hong Kongs</i> gegeten.
          </p>
        </TextArea>
        <Image bg image={"day2/food"} pos={[1,9,6,2]}/>
        <Stack pos={[7,9,6,2]}>
          <Image bg image={"day2/temple7"}/>
          <Image bg image={"day2/temple8"}/>
          <Image bg image={"day2/temple10"}/>
        </Stack>
        <TextArea pos={[1,11,12,1]}>
          <h3>
            Naar het vliegveld
          </h3>
          <p>
            Verlicht gingen we via een bus terug naar het metrostation om weer naar het hotel te gaan.
            Daar werden we weer met een busje naar (weer terug naar) het vliegveld gebracht voor <b>onze vlucht naar Sydney</b>.
          </p>
        </TextArea>
        <Image image={"day2/airport1"} bg pos={[1,12,6,2]} />
        <Image image={"day2/airport2"} bg pos={[7,12,6,2]} />
      </Day >
    );
  }
}

export default Day2;


