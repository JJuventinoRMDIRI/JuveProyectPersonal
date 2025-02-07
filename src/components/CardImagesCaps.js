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
    <div className="card mb-3">
      <img src={imgSrc} className="card-img-top" alt={imgAlt} />
      <div className="card-body">
        <h5 className="card-title">{cardTitle}</h5>
        <p className="card-text">{cardText}</p>
        <p className="card-text">
          <small className="text-body-secondary">{cardTextSupressed}</small>
        </p>
      </div>
    </div>
  );
};

export default CardImagesCaps;
