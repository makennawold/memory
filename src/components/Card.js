import React from "react";
import { useEffect, useState } from "react";

const Card = ({ card, cardsTheme, setSelectedCards, selectedCards }) => {
  const [cardUp, setCardUp] = useState(false);
  const [clickEnabled, setClickEnabled] = useState(false);

  const handleClick = () => {
    if (clickEnabled) {
      setSelectedCards([...selectedCards, card]);
      setCardUp(true);
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
    <div className="card" onClick={handleClick}>
      {card.isMatched ? (
        <div className="matched"></div>
      ) : cardUp ? (
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
