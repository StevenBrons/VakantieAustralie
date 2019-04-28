import React, { Component } from 'react';
import Day from '../components/Day'
import Image from '../components/Image'
import Video from '../components/Video'
import TextArea from '../components/TextArea'

class Day5 extends Component {
  render() {
    return (
      <Day title={"Dag 5"} image={"day5/lookoutPanorama2"} subtitle={"Blue Mountains"} gridCols={12} gridRows={10}>
        <Image image="day5/olympic1" bg pos={[1,1,5,1]}/>
        <TextArea pos={[6,1,7,1]}>
          <h3>
            Op weg naar de Blue Mountains
          </h3>
          <p>
            Vandaag hadden we een tour naar de <b>Blue Mountains</b> geboekt.
            We werdern 's ochtends vroeg bij het hotel opgehaald en reden naar de Blue Mountains, ongeveer anderhalf uur van Sydney verwijderd.
            Op de heenweg kwamen we nog even langs het <b>olympisch park</b> waar Australië in olympische spelen van 2000 organiseerde.
          </p>
          <p>
            Bij de Blue Mountains aangekomen was onze eerste stop een wandeling naar een uitzichtpunt over een waterval.
          </p>
        </TextArea>

        <Image image={"day5/walk9"} bg pos={[1,2,3,1]}/>
        <Image image={"day5/walk8"} bg pos={[4,2,6,1]}/>
        <Image image={"day5/walk11"} bg pos={[10,2,3,1]}/>

        <Image image={"day5/walk2"} bg pos={[1,3,3,1]} />
        <Image image={"day5/walk6"} bg pos={[4,3,6,1]}/>
        <Image image={"day5/walk12"} bg pos={[10,3,3,1]}/>

        <Image image={"day5/walk5"} bg pos={[1,4,5,1]}/>
        <Image image={"day5/walk3"} bg pos={[6,4,2,1]} />
        <Image image={"day5/walk4"} bg pos={[8,4,5,1]}/>

        <Image image="day5/cableCar" bg pos={[1,5,5,1]} />
        <TextArea pos={[6,5,7,1]}>
          <h3>
            Scenic Railway park
          </h3>
          <p>
            Na dit uitzichtpunt reden we door naar een dorpje voor lunch.
            We kochten hier een paar broodjes bij de supermarkt en chocola bij de plaatselijke chocolaterie.
            Daarna vertrokken we weer, dit keer naar een groot park, de <b>Scenic Railway</b> waar je de Blue Mountains met behulp van een aantal wandelpaden en drie kabelbanen kon bekijken.
          </p>
        </TextArea>
        <Image image="day5/threeSisters" bg pos={[8,6,5,1]}/>
        <TextArea pos={[1,6,7,1]}>
          <p>
            De eerste kabelbaan liep horizontaal tussen twee bergtoppen.
            In het midden van het karretje was een stuk met een glazen vloer.
            Je had een mooi uitzicht op de valei en <b>The Three Sisters</b>, de kenmerkende rotsformatie van het gebied.
          </p>
        </TextArea>
        <Image image={"day5/parc4"} bg pos={[1,7,4,2]} />
        <Video video={"day5/tarzan"} bg pos={[5,7,4,2]} />
        <Image image={"day5/parc5"} bg pos={[9,7,4,2]} />
        <TextArea pos={[1,9,12,1]}>
          <h3>
            Uitzichtpunten
          </h3>
          <p>
            Aan de andere kant van de kabelbaan was er de tweede kabelbaan die beneden liep, het dal in.
            In het dal kregen we van onze gids uitleg over de planten en dieren van het regenwoud.
          </p>
          <p>
            Na onze wandeling door het dal gingen we via een derde kabelbaan omhoog om vervolgens weer terug naar de bus te gaan.
          </p>
          <p>
            Hierna gingen we nog naar twee <b>uitzichtpunten</b> alvorens terug te gaan, richting Sydney.
          </p>
        </TextArea>
        <Image image={"day5/lookoutPanorama5"} pos={[1,10,12,1]} />
        <Image image={"day5/blueMountains1"} pos={[1,11,4,1]} />
        <Image image={"day5/ridge"} pos={[5,11,4,1]} />
        <Image image={"day5/blueMountains2"} pos={[9,11,4,1]} />
        <Image image={"day5/lookoutPanorama1"} pos={[1,12,12,1]} />
        <TextArea pos={[1,13,12,1]}>
          <h3>
            Sydney boottocht
          </h3>
          <p>
            We werden met de bus afgezet bij een haven, waar een boot op ons wachtte voor een <b>nachtelijke boottocht</b> naar de Circular Quay.
            Vanuit het dak van de boot konden voor het eerst het <b>Southern Cross</b> zien, een sterrenbeeld uniek voor deze kant van de wereld.
            Uiteindelijk voeren we onder de Harbour Bridge en langs het Opera House de haven Circular Quay weer in.
          </p>
        </TextArea>
        <Image image={"day5/sydneyAtNight"} pos={[1,14,4,1]}/>
        <Image image={"day5/southernCross"} pos={[5,14,4,1]}/>
        <Image image={"day5/operaAtNight"} pos={[9,14,4,1]}/>
      </Day >
    );
  }
}

export default Day5;


