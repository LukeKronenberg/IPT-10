import React, { useState } from 'react';
import './App.css';

//funtions here

function App() {

  //variables here
  //how to bind --> const [val, updateVal] = useState(1)
  
  //funtions here
  function StartScreen(){
    return(<div className="StartScreen">
      <div className="GameName">
        <p>Insert Name</p>
      </div>
    </div>)
  }

  function Tile(numb: any){
    return (<div id={numb} className="tile">{numb}</div>)
  }

  function Board(){
    
    var tileArray: any[] = [];

    for(var i = 0; i < 100; i++){
      tileArray.push(i);
    }

    tileArray.map(numb => {
      <Tile value={numb}/>
    })

    var element = <div id="board">
      {tileArray}
    </div>;
    return element;
  }


  return (
    <div className="App">
      <header className="App-header">
        <StartScreen/>
        <Board/>
      </header>
    </div>
  );
}


export default App;