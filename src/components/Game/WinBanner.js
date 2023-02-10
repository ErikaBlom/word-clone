import React from "react";

const WinBanner = ({ numberOfGuesses }) => {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in <strong>{numberOfGuesses} guesses</strong>.
      </p>
    </div>
  );
};

export default WinBanner;
