import React from "react";

const CardImagesCaps = (props) => {
  const {
    imgSrc,
    imgAlt = "alias",
    cardTitle = "titulo",
    cardText = "texto",
    cardTextSupressed = "Texto suprimidpo",
  } = props;

  return (
    <div class="card mb-3">
      <img src={imgSrc} class="card-img-top" alt={imgAlt} />
      <div class="card-body">
        <h5 class="card-title">{cardTitle}</h5>
        <p class="card-text">{cardText}</p>
        <p class="card-text">
          <small class="text-body-secondary">{cardTextSupressed}</small>
        </p>
      </div>
    </div>
  );
};

export default CardImagesCaps;
