import "./styles/App.css";
import { useEffect, useState } from "react";

import { TbCrown } from "react-icons/tb";

import Card from "./components/Card";

import tangled1 from "./images/tangled_images/tangled_1.jpeg";
import tangled2 from "./images/tangled_images/tangled_2.jpeg";
import tangled3 from "./images/tangled_images/tangled_3.jpeg";
import tangled4 from "./images/tangled_images/tangled_4.jpeg";
import tangled5 from "./images/tangled_images/tangled_5.jpeg";
import tangled6 from "./images/tangled_images/tangled_6.jpeg";
import tangled7 from "./images/tangled_images/tangled_7.jpeg";
import tangled8 from "./images/tangled_images/tangled_8.jpeg";
import tangled9 from "./images/tangled_images/tangled_9.jpeg";
import tangled10 from "./images/tangled_images/tangled_10.jpeg";
import tangled11 from "./images/tangled_images/tangled_11.jpeg";
import tangled12 from "./images/tangled_images/tangled_12.jpeg";

import tangled from "./images/card-backs/tangled.jpeg";

function App() {
  let tangledArray = [
    { num: 1, img: tangled1 },
    { num: 2, img: tangled2 },
    { num: 3, img: tangled3 },
    { num: 4, img: tangled4 },
    { num: 5, img: tangled5 },
    { num: 6, img: tangled6 },
    { num: 7, img: tangled7 },
    { num: 8, img: tangled8 },
    { num: 9, img: tangled9 },
    { num: 10, img: tangled10 },
    { num: 11, img: tangled11 },
    { num: 12, img: tangled12 },
  ];
  let crittersArray = [
    { num: 1, img: "images/critters_images/critters_1.jpeg" },
    { num: 2, img: "images/critters_images/critters_2.jpeg" },
    { num: 3, img: "images/critters_images/critters_3.jpeg" },
    { num: 4, img: "images/critters_images/critters_4.jpeg" },
    { num: 5, img: "images/critters_images/critters_5.jpeg" },
    { num: 6, img: "images/critters_images/critters_6.jpeg" },
    { num: 7, img: "images/critters_images/critters_7.jpeg" },
    { num: 8, img: "images/critters_images/critters_8.jpeg" },
    { num: 9, img: "images/critters_images/critters_9.jpeg" },
    { num: 10, img: "images/critters_images/critters_10.jpeg" },
  ];

  const [cardsTheme, setCardsTheme] = useState(tangled);
  const [cards, setCards] = useState([]);
  const [player1Points, setPlayer1Points] = useState(0);
  const [player2Points, setPlayer2Points] = useState(0);
  const [cardOne, setCardOne] = useState(null);

  const shuffleCards = () => {
    let shuffledCards = [...tangledArray, ...tangledArray]
      .map((item, index) => ({ ...item, id: index + 1 }))
      .sort((a, b) => 0.5 - Math.random());

    setCards(shuffledCards);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className="app">
      <div className="header">
        <div className="player-container">
          <div className="player">player 1 </div>
          <div className="points-container">
            <div className="crown">
              <TbCrown />
            </div>
            <div className="points">{player1Points}</div>
          </div>
        </div>
        <div className="title">
          M<span className="title-medium">E</span>
          <span className="title-small">MO</span>
          <span className="title-medium">R</span>Y
        </div>
        <div className="player-container">
          <div className="player">player 2 </div>
          <div className="points-container">
            <div className="crown">
              <TbCrown />
            </div>
            <div className="points">{player2Points}</div>
          </div>
        </div>
      </div>
      <div className="card-container">
        <div className="cards">
          {cards.map((card) => (
            <Card key={card.id} card={card} cardsTheme={cardsTheme} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
