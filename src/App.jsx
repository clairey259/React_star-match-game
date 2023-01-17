import { useState } from "react";
import "./App.scss";
import Main from "./Components/Main/Main";
import Navbar from "./Components/Navbar/Navbar";

const StarMatch = () => {
  const [gameID, setGameID] = useState(1);
  const startNewGame = () => setGameID(gameID + 1);
  return (
    <>
      <Game key={gameID} startNewGame={startNewGame}/>
    </>
  );
};

const Game = (props) => {
  return (
    <>
      <Navbar />
      <Main startNewGame={props.startNewGame}/>
    </>
  );
};

export default StarMatch;

