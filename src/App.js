import "./styles/App.css";
import { useEffect, useState } from "react";

import { TbCrown } from "react-icons/tb";

import Card from "./components/Card";

function App() {
  let tangledArray = [
    { num: 1, img: "images/tangled_images/tangled_1.jpeg" },
    { num: 2, img: "images/tangled_images/tangled_2.jpeg" },
    { num: 3, img: "images/tangled_images/tangled_3.jpeg" },
    { num: 4, img: "images/tangled_images/tangled_4.jpeg" },
    { num: 5, img: "images/tangled_images/tangled_5.jpeg" },
    { num: 6, img: "images/tangled_images/tangled_6.jpeg" },
    { num: 7, img: "images/tangled_images/tangled_7.jpeg" },
    { num: 8, img: "images/tangled_images/tangled_8.jpeg" },
    { num: 9, img: "images/tangled_images/tangled_9.jpeg" },
    { num: 10, img: "images/tangled_images/tangled_10.jpeg" },
    { num: 11, img: "images/tangled_images/tangled_11.jpeg" },
    { num: 12, img: "images/tangled_images/tangled_12.jpeg" },
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

  const [cardsTheme, setCardsTheme] = useState("tangled");
  const [cards, setCards] = useState([]);
  const [player1Points, setPlayer1Points] = useState(0);
  const [player2Points, setPlayer2Points] = useState(0);

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
      <div className="card-container">{cards.map((card) => {})}hi</div>
    </div>
  );
}

export default App;
