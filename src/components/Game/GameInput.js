import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const GameInput = ({ addGuessResult, disabled }) => {
  const [value, setValue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    addGuessResult({id: uuidv4(), label: value});
    setValue("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={onSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={value}
        maxLength={5}
        minLength={5}
        onChange={(e) => setValue(e.target.value.toUpperCase())}
        disabled={disabled}
      />
    </form>
  );
};

export default GameInput;
