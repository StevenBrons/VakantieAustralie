import React, { Component } from 'react';
import './App.css';
import Day0 from './days/Day0'
import Day1 from './days/Day1'
import Day2 from './days/Day2'
import Day3 from './days/Day3'
import Day4 from './days/Day4'
import Day5 from './days/Day5'
import Day6 from './days/Day6'
import Day7 from './days/Day7'
import Day8 from './days/Day8'
import Day9 from './days/Day9'
import Day10 from './days/Day10'
import Day11 from './days/Day11'
import Day12 from './days/Day12'
import Day13 from './days/Day13'
import Day14 from './days/Day14'
import Day15 from './days/Day15'
import Day16 from './days/Day16'
import Day17 from './days/Day17'
import Day18 from './days/Day18'
import Day19 from './days/Day19'
import Day20 from './days/Day20'
import Header from './components/Header'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Australië" image="HeaderTotal" height="100vh" subtitle="Door Steven Bronsveld" />
        <Day0 />
        <Day1 />
        <Day2 />
        <Day3 />
        <Day4 />
        <Day5 />
        <Day6 />
        <Day7 />
        <Day8 />
        <Day9 />
        <Day10 />
        <Day11 />
        <Day12 />
        <Day13 />
        <Day14 />
        <Day15 />
        <Day16 />
        <Day17 />
        <Day18 />
        <Day19 />
        <Day20 />
        <div style={{ height: "500px" }}>
        </div>
      </div>
    );
  }
}

export default App;

