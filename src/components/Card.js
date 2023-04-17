import React from "react";

function Card(image) {
  return (
    <div>
      <img
        src={image}
        styles={{ backgroundColor: "purple", height: "300px", width: "400px" }}
      />
    </div>
  );
}

export default Card;
