import React, { useState } from 'react';
import './App.css';

enum ActiveScreen { Playfield, StartScreen }

function App() {

  //variables here
  //how to bind --> const [val, updateVal] = useState(1)

  const [activescreen, setactivescreen] = React.useState(ActiveScreen.StartScreen);
  const [tutorialIsShown, setTutorialIsShown] = React.useState(false);

  //funtions here
  function StartScreen() {
    return (<div className={"StartScreen " + (activescreen == ActiveScreen.StartScreen ? " " : "hidden ")}>
      <div className="GameName">
        <p>Insert Gamename</p>
        <p className="Border button" onClick={showPlayfield}>Start Game</p>
        <p className="Border button" onClick={() => setTutorialIsShown(true)}>Tutorial</p>
      </div>
    </div>)
  }

  function BoardParent() {
    return <div id="play-field" className={"board-parent " + (activescreen == ActiveScreen.Playfield ? " " : "hidden ")}><Board /></div>
  }

  function Turtorial() {
    return (
      <div className={"tutorial-parent" + (tutorialIsShown ? " " : "hidden ")}>
        Tutorial
      </div>
    )
  }

  function Board() {

    var tileArray: number[] = [];

    for (var i = 1; i <= 100; i++) {
      tileArray.push(i);
    }

    const tileArrayFinal = tileArray.map(numb => {
      return <Tile numb={numb} />
    })

    var element = <div id="board" className="board">
      {tileArrayFinal}
    </div>;
    return element;
  }

  function Tile(props: { numb: number }) {
    return <div id={"Tile" + props.numb.toFixed()} className="tile">{props.numb}</div>
  }

  function showPlayfield() {
    setactivescreen(ActiveScreen.Playfield)
  }

  function showTutorial() {

  }

  return (
    <div className="App">
      <header className="App-header">
        <StartScreen />
        <BoardParent />
        <Turtorial />
      </header>
    </div>
  );
}


export default App;