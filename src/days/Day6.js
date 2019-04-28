import React, { Component } from 'react';
import Day from '../components/Day'
import Image from '../components/Image'
import Stack from '../components/Stack';
import TextArea from '../components/TextArea';

class Day6 extends Component {
  render() {
    return (
      <Day title={"Dag 6"} image={"day6/brisbane3"} subtitle={"Brisbane"} gridCols={12} gridRows={11}>
        <Image image="day6/hotel" bg pos={[1, 1, 4, 1]} />
        <Image image="day6/car" bg pos={[1, 2, 4, 1]} />
        <TextArea pos={[5, 1, 8, 2]}>
          <h3>
            Vlucht naar Brisbane
          </h3>
          <p>
            's Ochtends vroeg (te vroeg), zaten we in een taxi, op weg naar het vliegveld voor onze vlucht naar <b>Brisbane</b>.
            Na een anderhalf uur durende vlucht kwamen we aan in de stad.
            Met een derde (en laatste) taxi gingen we naar onze verblijfplaats: het <b>Royal On The Parc Hotel</b>.
          </p>
          <p>
            Nadat we alles in de hotelkamer hadden gelegd gingen we eerst onze <b>huurauto</b> ophalen.
            Daarna gingen we de <b>Botanic Gardens</b> van Brisbane bekijken, die tegenover ons hotel lagen.
          </p>
        </TextArea>
        <Image image="day6/botanicGardens7" bg pos={[1, 3, 3, 1]} />
        <Image image="day6/botanicGardens8" bg pos={[4, 3, 3, 1]} />
        <Image image="day6/botanicGardens1" bg pos={[7, 3, 3, 1]} />
        <Image image="day6/botanicGardens9" bg pos={[10, 3, 3, 1]} />

        <Image image="day6/botanicGardens4" bg pos={[1, 4, 3, 2]} />
        <Image image="day6/botanicGardens10" bg pos={[4, 4, 3, 2]} />
        <Image image="day6/botanicGardens14" bg pos={[7, 4, 3, 2]} />
        <Image image="day6/botanicGardens2" bg pos={[10, 4, 3, 2]} />

        <Image image="day6/botanicGardens12" bg pos={[1, 6, 4, 1]} />
        <Image image="day6/botanicGardens13" bg pos={[5, 6, 4, 1]} />
        <Stack pos={[9, 6, 4, 1]} >
          <Image image="day6/botanicGardens11" bg />
          <Image image="day6/botanicGardens15" bg />
          <Image image="day6/botanicGardens16" bg />
        </Stack>

        <Image image="day6/pool1" pos={[1, 7, 4, 1]} />
        <Image image="day6/pool2" pos={[9, 7, 4, 1]} />
        <TextArea pos={[5, 7, 4, 1]}>
          <h3>
            Bubbelbad
          </h3>
          <p>
            's Avonds hebben zijn we nog even door de stad wezen lopen, maar al gauw vonden we het <b>bubbelbad</b> in het hotel aantrekkelijker klinken, dus hebben we daar de rest van de tijd doorgebracht.
          </p>
        </TextArea>

        <Image image="day6/brisbane2" bg pos={[1, 8, 3, 2]} />
        <Image image="day6/brisbane1" bg pos={[4, 8, 3, 1]} />
        <Image image="day6/brisbane3" bg pos={[7, 8, 3, 1]} />
        <Image image="day6/brisbane6" bg pos={[10, 8, 3, 2]} />

        <Image image="day6/brisbane4" bg pos={[4, 9, 3, 1]} />
        <Image image="day6/brisbane5" bg pos={[7, 9, 3, 1]} />

        <Image image="day6/brisbane7" bg pos={[1, 10, 6, 2]} />
        <Image image="day6/brisbane8" bg pos={[7, 10, 6, 2]} />
      </Day >
    );
  }
}

export default Day6;


