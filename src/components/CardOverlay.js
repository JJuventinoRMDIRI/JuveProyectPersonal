import React from 'react';
import { Link } from 'react-router-dom';

const CardOverlay = (props) => {
    const { imgSrc,
        className,
        style,
        altName = "card1",
        imgClassName,
        imgStyle,
        cardTitle = "Titulo",
        cardText1 = "Texto de prueba",
        link
    } = props;

    return (
        <div class={`col-md-4 p-2 ${className}`}>
            <div
                class="card bg-dark text-white border-0 rounded-4 shadow-lg"
                style={{ height: "100%", ...style }}
            >
                <img
                    src={imgSrc}
                    class={`card-img rounded-4 ${imgClassName}`}
                    alt={altName}
                    style={{ height: "550px", width: "auto", ...imgStyle }}
                />
                <div class="card-img-overlay ">
                    <h5 class="card-title fw-bold">{cardTitle}</h5>
                    <p class="card-text">
                        {cardText1}
                    </p>
                    <Link
                        to={link}
                        class="stretched-link"
                    ></Link>
                </div>
            </div>
        </div>
    );
}

export default CardOverlay;
