import React from "react";

const CardSimples = (props) => {
  const {
    imgSrc,
    imgAlt = "1",
    cardTitle = "titulo",
    cardText = "texto",
    buttonText = "texto boton",
    buttonUrl,
  } = props;

  return (
    <div class="card" style={{width: '18rem', marginBottom: 20}}>
      <img src={imgSrc} class="card-img-top" alt={imgAlt} />
      <div class="card-body">
        <h5 class="card-title">{cardTitle}</h5>
        <p class="card-text">{cardText}</p>
        {buttonUrl && <a href={buttonUrl} class="btn btn-primary">
          {buttonText}
        </a>}
      </div>
    </div>
  );
};

export default CardSimples;
