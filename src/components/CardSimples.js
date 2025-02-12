import React from "react";

const CardSimples = (props) => {
  const {
    imgSrc,
    imgAlt = "1",
    imgStyle,
    cartTitleHeader = "Titulo Header",
    cardTitle = "Titulo",
    cardText = "Texto",
    buttonText = "Texto boton",
    buttonUrl,
  } = props;

  return (
    <div class="card">
      <div class="card-body">
        <h3 class="card-title text-center">{cartTitleHeader}</h3>
      </div>
      <div class="d-flex justify-content-center align-items-center pt-4">
        <img
          src={imgSrc}
          style={{ width: "300px", borderRadius: 30 , ...imgStyle}}
          class="card-img-top shadow-lg"
          alt={imgAlt}
        />
      </div>
      <div class="card-body">
        <h5 class="card-title">{cardTitle}</h5>
        <p class="card-text">{cardText}</p>
        {buttonUrl && <a
          href={buttonUrl}
          class="btn btn-primary d-flex justify-content-center"
        >
          {buttonText}
        </a>}
      </div>
    </div>
  );
};

export default CardSimples;
