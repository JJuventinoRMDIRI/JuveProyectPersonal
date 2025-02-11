import React from 'react';

const CardHorizontal = (props) => {
    const {
        imgSrc,
        imgStyle,
        imgClassName,
        imgAltName = "card",
        cardTitle = "Titulo",
        cardText = "Texto de prueba",
        content,
        direction = "right"
    } = props;




    return (
        <div className="card mb-3 m-5" >
            <div className="row g-0">
                {direction === "left" && <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{cardTitle}</h5>
                        <p className="card-text">{cardText}</p>
                        {content}
                    </div>
                </div>}
                <div className="col-md-4 d-flex justify-content-center align-items-center rounded-end">
                    <img src={imgSrc} style={{ minHeight: '420px', ...imgStyle }} className={`img-fluid rounded-start ${imgClassName}`} alt={imgAltName} />
                </div>
                {direction === "right" && <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{cardTitle}</h5>
                        <p className="card-text">{cardText}</p>
                        {content}
                    </div>
                </div>}
            </div>
        </div>
    );
}

export default CardHorizontal;
