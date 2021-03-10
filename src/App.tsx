import React, { useState } from 'react';
import './App.css';

function App() {

  //variables here
  //how to bind --> const [val, updateVal] = useState(1)

  const [showPlayfield, setshowPlayfield] = React.useState(false);
  const [showStartScreen, setshowStartScreen] = React.useState(true);

  //funtions here
  function StartScreen() {
    return (<div className={"StartScreen " + (showStartScreen ? " " : "hidden ")} onClick={togglePlayfield}>
      <div className="GameName">
        <p>Insert Name</p>
      </div>
    </div>)
  }

  function BoardParent() {
    return <div id="play-field" className={"board-parent " + (showPlayfield ? " " : "hidden ")} onClick={togglePlayfield}><Board /></div>
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

  function togglePlayfield() {
    if (showPlayfield) {
      setshowPlayfield(false);
      setshowStartScreen(true);
    } else {
      setshowPlayfield(true);
      setshowStartScreen(false);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <StartScreen />
        <BoardParent />
      </header>
    </div>
  );
}


export default App;