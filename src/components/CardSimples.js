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
    <div className="card">
      <div className="card-body">
        <h3 className="card-title text-center">{cartTitleHeader}</h3>
      </div>
      <div className="d-flex justify-content-center align-items-center pt-4">
        <img
          src={imgSrc}
          style={{ width: "300px", borderRadius: 30 , ...imgStyle}}
          className="card-img-top shadow-lg"
          alt={imgAlt}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">{cardTitle}</h5>
        <p className="card-text">{cardText}</p>
        {buttonUrl && <a
          href={buttonUrl}
          className="btn btn-primary d-flex justify-content-center"
        >
          {buttonText}
        </a>}
      </div>
    </div>
  );
};

export default CardSimples;
