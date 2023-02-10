import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "./Guess";
import { checkGuess } from "../../game-helpers";

const GuessResults = ({ guessResults, answer }) => {

  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => {
        const checkedGuess = guessResults[index]
          ? checkGuess(guessResults[index].label, answer)
          : [];
        return <Guess key={index} guess={checkedGuess} />;
      })}
    </div>
  );
};

export default GuessResults;
