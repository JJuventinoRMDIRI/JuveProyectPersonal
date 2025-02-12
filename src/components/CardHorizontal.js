import React from 'react';

const CardHorizontal = (props) => {
    const {
        imgSrc,
        imgStyle,
        imgclass,
        imgAltName = "card",
        cardTitle = "Titulo",
        cardText = "Texto de prueba",
        content,
        direction = "right"
    } = props;




    return (
        <div class="card mb-3 m-5" >
            <div class="row g-0">
                {direction === "left" && <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{cardTitle}</h5>
                        <p class="card-text">{cardText}</p>
                        {content}
                    </div>
                </div>}
                <div class="col-md-4 d-flex justify-content-center align-items-center rounded-end">
                    <img src={imgSrc} style={{ minHeight: '420px', ...imgStyle }} class={`img-fluid rounded-start ${imgclass}`} alt={imgAltName} />
                </div>
                {(direction === "right" || direction === null) && <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{cardTitle}</h5>
                        <p class="card-text">{cardText}</p>
                        {content}
                    </div>
                </div>}
            </div>
        </div>
    );
}

export default CardHorizontal;
