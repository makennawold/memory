import React from "react";
import { useEffect, useState } from "react";

const Card = ({ card, cardsTheme, setSelectedCards, selectedCards }) => {
  const [cardUp, setCardUp] = useState(false);
  const [clickEnabled, setClickEnabled] = useState(false);

  const handleClick = () => {
    if (clickEnabled) {
      setCardUp(true);
      setSelectedCards([...selectedCards, card]);
    }
  };

  useEffect(() => {
    if (selectedCards.length == 0) {
      setCardUp(false);
      setClickEnabled(true);
    }
    if (selectedCards.length == 2) {
      setClickEnabled(false);
    }
  }, [selectedCards]);
  return (
    <div className="card-container" onClick={handleClick}>
      {card.isMatched ? (
        <div className="matched"></div>
      ) : (
        <div className={`card ${cardUp ? "faceup" : ""}`}>
          <div className="front">
            <img src={card.img} />
          </div>
          <div className="back">
            <img src={cardsTheme} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
