import React, { Component } from 'react';
import Day from '../components/Day'
import Image from '../components/Image'
import Stack from '../components/Stack'
import Video from '../components/Video'
import TextArea from '../components/TextArea'
import Header from '../components/Header'

class Day11 extends Component {
  render() {
    return (
      <Day title={"Dag 11"} image={"day11/beach5"} subtitle={"Fraser Island"} gridRows={22} gridCols={12}>
        <Image image="day11/4wd1" pos={[1, 1, 4, 1]} />
        <Image image="day11/4wd3" bg pos={[9, 1, 4, 2]} />
        <TextArea pos={[5, 1, 4, 2]}>
          <h3>
            Four Weel Drive
          </h3>
          <p>
            {this.createHumbs("We hadden vandaag een ")}
            <b>Four Weel Drive</b>
            {this.createHumbs(" auto gehuurd zodat we het eiland konden van ontdekken. ")}
            {this.createHumbs("We hadden een route gekregen die we konden volgen waarbij we langs alle bezienswaardigheden geleidt worden.")}
            {this.createHumbs(" Het eiland bestaat helemaal uit ")}
            <b>hobbelige zandwegen</b>
            {this.createHumbs(" waarbij we heel erg door elkaar werden geschud. ")}
          </p>
        </TextArea>

        <Image image="day11/4wd5" pos={[1, 3, 4, 1]} />
        <Image image={"day11/4wd2"} pos={[5, 3, 4, 1]} />
        <Image image="day11/4wd4" pos={[9, 3, 4, 1]} />

        <Stack bg pos={[1, 4, 4, 1]}>
          <Image image="day11/lake1" />
          <Image image="day11/lake2" />
          <Image image="day11/lake3" />
        </Stack>
        <TextArea pos={[5, 4, 4, 1]}>
          <h3>
            Lake Wabby
          </h3>
          <p>
            Onze eerste stop was bij een uitzichtpunt over <b>Lake Wabby</b>.
            Daarna zijn we via een pad naar het meer gelopen.
          </p>
        </TextArea>
        <Stack bg pos={[9, 4, 4, 1]}>
          <Image image="day11/lake4" bg />
          <Image image="day11/lake5" bg />
          <Image image="day11/lake6" bg />
        </Stack>

        <Image image="day11/sea1" bg pos={[1, 5, 3, 1]} />
        <Image image="day11/sea3" bg pos={[4, 5, 3, 1]} />
        <Image image="day11/sea4" bg pos={[7, 5, 3, 1]} />
        <Image image="day11/sea5" bg pos={[10, 5, 3, 1]} />

        <Image image="day11/blockade" pos={[1, 6, 4, 1]} />
        <Image image="day11/beach6" pos={[1, 7, 4, 1]} />
        <TextArea pos={[5, 6, 8, 2]}>
          <h3>
            Wachten bij het strand
          </h3>
          <p>
            Na het meer hobbelde we door naar het oost-strand.
            We mochten niet het zoute water in met onze huurauto en het begon vloed te worden.
            We wilden niet ingesloten worden door het de zee, dus besloten we te wachten totdat de zee zich terugtrok.
          </p>
          <p>
            Na een uur waren we het wachten zat en besloten we het er toch op te wagen.
            Helaas liepen we tegen een <b>rotsbarière</b> aan dus moesten we nog langer wachten.
          </p>
          <p>
            Uiteindelijk overwonnen we de rotsen door met perfecte timing tussen twee golven door om de rotsen heen te rijden.
          </p>
        </TextArea>

        <Image image="day11/beach3" bg pos={[1, 8, 3, 1]} />
        <Image image="day11/beach7" bg pos={[4, 8, 3, 1]} />
        <Image image="day11/beach4" bg pos={[7, 8, 3, 1]} />
        <Image image="day11/beach8" bg pos={[10, 8, 3, 1]} />

        <TextArea pos={[1, 9, 12, 1]}>
          <h3>
            Scheepswrak
          </h3>
          <p>
            Onder de landende vliegthuigen en door de vele <b>creeks</b> heen
            kwamen we aan bij onze volgende bezienswaardigheid: het <b>SS Maheno scheepswrak</b>.
          </p>
        </TextArea>
        <Image image="day11/shipwreck1" bg pos={[1, 10, 6, 1]} />
        <Image image="day11/shipwreck2" bg pos={[7, 10, 6, 1]} />
        <Image image="day11/shipwreck4" bg pos={[1, 11, 6, 1]} />
        <Image image="day11/shipwreck7" bg pos={[7, 11, 6, 1]} />

        <Image image="day11/pinnacles" pos={[1, 12, 4, 1]} />
        <TextArea pos={[5, 12, 4, 1]}>
          <h3>
            The Pinnacles
          </h3>
          <p>
            Onze volgende stop op het kaartje was een bijzondere zandformatie,
            bestaande uit allerlei verschillende kleuren zand, <b>The Pinnacles</b> genaamd.
          </p>
        </TextArea>
        <Image image="day11/pinnacles2" pos={[9, 12, 4, 1]} />

        <TextArea pos={[1, 13, 4, 1]}>
          <h3>Eli Creek</h3>
          <p>
            The Pinnacles was het verste punt van onze route. We reden weer terug over het strand richting
            <b> Eli Creek</b>.
          </p>
        </TextArea>
        <Image image="day11/creek4" pos={[5, 13, 4, 1]} />
        <Image image="day11/creek9" pos={[9, 13, 4, 1]} />

        <Image image="day11/creek1" bg pos={[1, 14, 6, 2]} />
        <Image image="day11/car" bg pos={[7, 14, 6, 2]} />

        <Image image="day11/creek2" bg pos={[1, 16, 4, 1]} />
        <Image image="day11/creek9" bg pos={[5, 16, 4, 1]} />
        <Image image="day11/creek5" bg pos={[9, 16, 4, 1]} />

        <TextArea pos={[1, 17, 8, 1]}>
          <h3>
            Bosbrand
          </h3>
          <p>
            Intussen begon het al aardig laat te worden.
            We moesten de auto weer om vijf uur inleveren.
            De rotsbarière van eerder was door de terugtrekkende zee geen obstakel meer.
            Toen we (na weer een hobbelweg van een half uur) weer bij het resort aankwamen
            werden we begroet door een gecontrolleerde <b>bosbrand</b>!
          </p>
        </TextArea>
        <Image image="day11/blockadeAfter" pos={[9, 17, 4, 1]} />

        <Image image="day11/fire2" pos={[1, 18, 4, 1]} />
        <Image image="day11/fire3" pos={[5, 18, 4, 1]} />
        <Image image="day11/fire6" bg pos={[9, 18, 4, 2]} />

        <Video video="fire" pos={[1, 19, 4, 1]} />
        <Image image="day11/fire5" verticalScaling pos={[5, 19, 4, 1]} />

        <Header image="day11/fire4" height="100%" parallax pos={[1, 20, 12, 3]} />
      </Day >
    );
  }

  createHumbs(text) {
    return text.split("").map((c, index) => {
      let d = Math.sin(index) * 2;
      return <span style={{ transform: "translate(0px," + d + "px)", display: "inline-block", minWidth: "5px" }}>{c}</span>
    });
  }
}

export default Day11;


