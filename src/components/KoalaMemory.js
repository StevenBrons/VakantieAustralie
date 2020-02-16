import React, { Component } from 'react';
import Header from '../components/Header'
import GridPos from './GridPos';
import './KoalaMemory.css';

const RESOLUTION = "low_res";

class KoalaMemory extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  init() {
    let koalas = [];
    for (let i = 1; i < 26; i++) {
      koalas.splice(Math.floor(Math.random() * koalas.length), 0, {
        id: i + " A",
        matched: false,
        selected: false,
      });
      koalas.splice(Math.floor(Math.random() * koalas.length), 0, {
        id: i + " B",
        matched: false,
        selected: false,
      });
    }
    this.setState({
      started: false,
      won: false,
      koalas: koalas,
    });
  }

  select(clickedKoala) {
    let selected = this.state.koalas.filter((k) => { return k.selected });
    this.setState({
      koalas: this.state.koalas.map((curKoala) => {
        if (selected.length === 1 && selected[0].id.split(" ")[0] === clickedKoala.id.split(" ")[0]) {
          if (curKoala.id.split(" ")[0] === selected[0].id.split(" ")[0]) {
            return { ...curKoala, selected: false, matched: true }
          }
        }
        if (clickedKoala.id === curKoala.id) {
          return { ...curKoala, selected: true, }
        } else {
          if (selected.length >= 2) {
            return { ...curKoala, selected: false };
          } else {
            return { ...{}, ...curKoala };
          }
        }
      }),
    });
  }

  start(event) {
    event.preventDefault();
    this.init();
    this.setState({
      started: true,
    });
  }

  render() {
    let koalas = [];
    if (!this.state.started) {
      for (let i = 1; i < 26; i++) {
        koalas[i] = (
          <img key={i} src={"./" + RESOLUTION + "/day7/sleepingKoalas/koala" + i + ".png"} alt="" />
        );
      }
    } else {
      let won = true;
      koalas = this.state.koalas.map((koala, i) => {
        if (koala.selected || koala.matched) {
          return (
            <img key={i} src={"./" + RESOLUTION + "/day7/sleepingKoalas/koala" + koala.id.split(" ")[0] + ".png"} alt="" />
          );
        } else {
          won = false;
          return (
            <img key={i} id={koala.id} name={koala.id} src={"./" + RESOLUTION + "/day7/sleepingKoalas/default.png"} alt="" onClick={() => this.select(koala)} />
          );
        }
      });
      if (!this.state.won && won) {
        this.setState({
          won: true,
          started: false,
        });
      }
    }

    return (
      <GridPos pos={this.props.pos} className="KoalaMemory" >
        {this.state.won ? <Header image="day7/sleepingKoalas/won" title="Het is je gelukt!!!" /> : koalas}
        {this.state.started ? null : <a onClick={(e) => this.start(e)} > Speel Koala Memory</a >}
      </GridPos>
    );
  }
}

export default KoalaMemory;
