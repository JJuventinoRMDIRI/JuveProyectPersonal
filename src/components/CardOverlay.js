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
        <div className={`col-md-4 p-2 ${className}`}>
            <div
                className="card bg-dark text-white border-0 rounded-4 shadow-lg"
                style={{ height: "100%", ...style }}
            >
                <img
                    src={imgSrc}
                    className={`card-img rounded-4 ${imgClassName}`}
                    alt={altName}
                    style={{ height: "550px", width: "auto", ...imgStyle }}
                />
                <div className="card-img-overlay ">
                    <h5 className="card-title fw-bold">{cardTitle}</h5>
                    <p className="card-text">
                        {cardText1}
                    </p>
                    <Link
                        to={link}
                        className="stretched-link"
                    ></Link>
                </div>
            </div>
        </div>
    );
}

export default CardOverlay;
