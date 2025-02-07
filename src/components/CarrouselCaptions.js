import React from 'react';

const CarrouselCaptions = (props) => {
    const {
        slides,
        id = "carrouselEjemplos"
    } = props;

    return (
        <div id={id} className="carousel slide" data-bs-side="carousel">
            <div className="carousel-indicators">
                {slides.map((slide, index) => (
                    <button
                        key={`indicator-${index}`}
                        type="button"
                        data-bs-target={`#${id}`}
                        data-bs-slide-to={index}
                        className={index === 0 ? "active" : ""}
                        aria-current={index === 0 ? "true" : undefined}
                        aria-label={`Slide ${index + 1}`}
                    ></button>
                ))}
            </div>
            <div className="carousel-inner">
                {slides.map((slide, index) => (
                    <div
                        key={`slide-${index}`}
                        className={`carousel-item ${index === 0 ? "active" : ""}`}
                    >
                        <img src={slide.imgSrc} className="d-block w-100" alt={slide.imgAlt} />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>{slide.title}</h5>
                            <p>{slide.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target={`#${id}`}
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target={`#${id}`}
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default CarrouselCaptions;
