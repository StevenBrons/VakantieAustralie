import React, { Component } from 'react';
import Day from '../components/Day'
import Header from '../components/Header'
import Image from '../components/Image'
import Video from '../components/Video'
import TextArea from '../components/TextArea';

class Day1 extends Component {
  render() {
    return (
      <Day title={"Dag 1"} image={"day1/ferry1"} subtitle={"Hong Kong"} gridCols={12} gridRows={13}>
        <Video video={"day1/Landing"} pos={[1, 1, 4, 1]} />
        <TextArea pos={[1, 1, 9, 2]}>
          <h3>
            Aankomst
          </h3>
          <p>
            Zodra we het vliegtuig uitstappen lopen we tegen de muur van <b>hitte en vochtigheid</b> die overal in Hong Kong heerst.
          </p>
          <p>
            In de aankomsthal wacht iemand van het hotel op ons te wachten om ons met een busje naar het hotel <b>BP International</b> te rijden.
            Onderweg worden we getroffen door een korte tropische regenbui.
          </p>
          <p>
            Eenmaal in het hotel aangekomen merkte we direct de koelte op.
            Werkelijkwaar elke ruimte in Hong Kong is gekoeld door de enorme hoeveelheid <b>airco's</b> die de stad rijk is.
            Lopen door de straten van Hong Kong is dan ook een vreemde mengelmoes van de tropische warmte van van de stad en de koude vlagen uit de winkels.
          </p>
        </TextArea>
        <Image image={"day1/aircos"} bg pos={[10, 1, 3, 2]} />

        <Image image="day1/bus4" pos={[1, 3, 3, 1]} />
        <Image image="day1/bus2" pos={[4, 3, 3, 1]} />
        <Image image="day1/bus3" pos={[7, 3, 3, 1]} />
        <Image image="day1/bus1" pos={[10, 3, 3, 1]} />

        <Image image="day1/city2" bg pos={[10, 3, 3, 2]} />
        <TextArea pos={[1, 4, 9, 1]}>
          <h3>
            Ferry
          </h3>
          <p>
            We lieten onze bagage in het hotel om de stad te gaan ontdekken.
            Hong Kong bestaat uit een aantal eilanden: Het hoofd-eiland Hong Kong, het eiland met ons hotel Kowloon, de eilanden met het vliegveld en de zogenaamde new territories.
            We gingen met de <b>Star Ferry</b> naar het eiland Hong Kong.
          </p>
        </TextArea>
        <Image image="day1/ferry1" pos={[1, 5, 3, 1]} />
        <Image image="day1/ferry2" pos={[4, 5, 3, 1]} />
        <Image image="day1/ferry3" pos={[7, 5, 3, 1]} />
        <Image image="day1/ferry4" pos={[10, 5, 3, 1]} />
        <TextArea pos={[1, 6, 12, 1]}>
          <h3>
            Uitzichtpunt
          </h3>
          <p>
            Eenmaal op het eiland aangekomen besloten we naar een uitzichtpunt (<b>The Peak</b>) te gaan doormiddel van een taxi.
            We hadden een geweldig uitzicht over de stad.
            Het was intussen vier uur 's middags en we begonnen de gevolgen van 22 uur weinig slaap te voelen.
            We gingen via een <b>treintje naar beneden</b> en via de ferrie weer terug naar ons eiland Kowloon.
          </p>
        </TextArea>
        <Image image="day1/peak1" bg pos={[1, 7, 4, 1]} />
        <Image image="day1/peak2" bg pos={[5, 7, 4, 1]} />
        <Image image="day1/peak3" bg pos={[9, 7, 4, 1]} />
        <Header title={"Hong Kong at night"} image={"day1/hongKongAtNight1"} parallax height="100%" pos={[1, 8, 12, 2]} />
        <TextArea pos={[5, 10, 8, 1]}>
          <h3>
            Hong Kong at Night
          </h3>
          <p>
            Op de terugweg kwamen we nog langs het <b>Kowloon park</b>.
          </p>
          <p>
            Aangekomen bij het hotel konden we eindelijk de kamers in. Daar zijn we even wezen slapen.
            Na ongeveer twee uur vertrokken we weer uit het hotel. We gingen naar the harbour om <b>Hong Kong at Night</b> te bekijken.
          </p>
        </TextArea>
        <Image image="day1/hongKongAtNight5" bg pos={[1, 10, 4, 1]} />
        {/* <Image image="day1/hongKongAtNight3" pos={[9,9,4,1]} /> */}
        <Header image={"day1/hongKongAtNight4"} parallax height="100%" pos={[1, 11, 12, 3]} />
      </Day >
    );
  }
}

export default Day1;


