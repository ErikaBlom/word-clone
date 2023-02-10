import React, { useState } from "react";
import GameInput from "./GameInput";
import GuessResults from "./GuessResults";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import WinBanner from "./WinBanner";
import LoseBanner from "./LoseBanner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);

// To make debugging easier, we'll log the solution in the console.
console.log(answer);

function Game() {
  const [guessResults, setGuessResults] = useState([]);
  const [gameResult, setGameResult] = useState();

  const addGuessResult = (guessResult) => {
    const newGuessResults = [...guessResults, guessResult];
    setGuessResults(newGuessResults);

    if (guessResult.label === answer) {
      setGameResult("won");
    } else if (newGuessResults.length === NUM_OF_GUESSES_ALLOWED) {
      setGameResult("lost");
    }
  };

  return (
    <>
      {gameResult === "won" ? (
        <WinBanner numberOfGuesses={guessResults.length}/>
      ) : gameResult === "lost" && (
        <LoseBanner correctAnswer={answer} />
      )}
      <GuessResults guessResults={guessResults} answer={answer} setGameResult={setGameResult} />
      <GameInput addGuessResult={addGuessResult} disabled={gameResult} />
    </>
  );
}

export default Game;
