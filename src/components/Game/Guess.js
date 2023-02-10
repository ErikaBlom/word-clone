import React from "react";
import { range } from "../../utils";

const Guess = ({ guess }) => (
  <p className="guess">
    {range(5).map((index) => (
      <span
        key={index}
        className={`cell ${guess.length > 0 && guess[index].status}`}
      >
        {guess.length > 0 && guess[index].letter}
      </span>
    ))}
  </p>
);

export default Guess;
