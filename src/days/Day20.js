import React, { Component } from 'react';
import Day from '../components/Day'
import Image from '../components/Image'
import TextArea from '../components/TextArea'
import Header from '../components/Header'
import Video from '../components/Video'

class Day20 extends Component {
  render() {
    return (
      <Day title="Dag 20" image="day20/view" subtitle="Atherton Tablelands" gridCols={12} gridRows={5}>
        <Image image="day20/plant1" pos={[1, 1, 4, 1]} />
        <TextArea pos={[5, 1, 4, 1]}>
          <h3>
            Atherton
          </h3>
          <p>
            's Ochtends werden we wakker met het bovenstaande uitzicht over het bos, vanuit onze blokhut.
            We hebben de dag besteed aan de omgeving van het dichtsbijzijnde stadje <b>Atherton</b> verkennen.
          </p>
        </TextArea>
        <Image image="day20/plant2" pos={[9, 1, 4, 1]} />

        <TextArea pos={[1, 2, 4, 1]}>
          <h3>
            Fig trees
          </h3>
          <p>
            In de buurt van Atherton zijn twee enorme <b>fig trees</b>, de <i>Curtain Fig Tree</i> en de <i>Cathedral Fig Tree</i>.
          </p>
        </TextArea>
        <Image image="day20/cathedral_fig_tree1" pos={[5, 2, 4, 1]} />
        <Image image="day20/cathedral_fig_tree2" pos={[9, 2, 4, 1]} />

        <Image image="day20/curtain_fig_tree1" bg pos={[1, 3, 4, 1]} />
        <Image image="day20/curtain_fig_tree2" pos={[5, 3, 4, 1]} />
        <Image image="day20/curtain_fig_tree3" bg pos={[9, 3, 4, 1]} />

        <TextArea pos={[1, 4, 4, 1]}>
          <h3>
            Vogelbekdier
          </h3>
          <p>
            {this.createHumbs("Doe wie doe wie doe waa, doe wie doe wie doe waaa ")}
            Bij Atherton was er een <b>Vogelbekdier</b> plek!
            In de middag waren we hier voor het eerst,
            maar nadat we een half uur hadden gewacht waren we het zat.
            Toen we later besloten toch nog een poging te wagen zagen we hem!
          </p>
        </TextArea>
        <Image image="day20/platipus1" pos={[5, 4, 4, 1]} />
        <Image image="day20/platipus2" pos={[9, 4, 4, 1]} />

        <Image image="day20/platipus3" pos={[1, 5, 4, 1]} />
        <Image image="day20/platipus4" pos={[5, 5, 4, 1]} />
        <Image image="day20/platipus5" pos={[9, 5, 4, 1]} />
      </Day >
    );
  }

  createHumbs(text) {
    let i = true;
    return text.split("").map((c, index) => {
      if (c == " ") {
        i = !i;
      }
      let d = Math.sin(index) * 2;
      return <span style={{ transform: "translate(0px," + d + "px)", display: "inline-block", minWidth: "5px", color: (i ? "#ff9100" : "#6110bc") }}>{c}</span>
    });
  }
}

export default Day20;


