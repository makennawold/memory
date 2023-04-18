import React from "react";
import { useEffect, useState } from "react";

const Card = ({ card, cardsTheme }) => {
  const [cardUp, setCardUp] = useState(false);

  return (
    <div
      className="card"
      onClick={() => {
        setCardUp(!cardUp);
      }}
    >
      {cardUp ? (
        <div className="front">
          <img src={card.img} />
        </div>
      ) : (
        <div className="back">
          <img src={cardsTheme} />
        </div>
      )}
    </div>
  );
};

export default Card;
