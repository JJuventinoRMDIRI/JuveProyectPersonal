import React from 'react';

const CarrouselCaptions = (props) => {
    const {
        slides,
        id = "carrouselEjemplos" 
        // definomos un id para poder manejar los botones de control y 
        // desplazamiento, de modo que el carusel conoce que accion aplicar
    } = props;

    return (
        <div id={id} class="carousel slide" data-bs-side="carousel">
            <div class="carousel-indicators">
                {slides.map((slide, index) => (
                    //aqui recorremos la informacion de un arreglo de objetos que traen la informacion
                    //  de cada diapositiva, con el fin de generar un boton por cada diapositiva
                    <button
                        key={`indicator-${index}`}
                        //aqui se asigna un clave unica de referencia para que react pues pudea 
                        // identificar cada elemento del arreglo de la lista
                        type="button"
                        data-bs-target={`#${id}`}
                        //con ayda del identificador , se le indica al bootstrap a que pantalla del 
                        // carrusel se movera al dar clikc al boton
                        data-bs-slide-to={index}
                        //aqui  se indica cuando se presiona el boton a cual diapositiva se movera el carrusel
                        class={index === 0 ? "active" : ""}
                        //asignamos la clave active al primer boton para poder acer el recorrido
                        aria-current={index === 0 ? "true" : undefined}
                        //aqui indicamos que el primer diapositiva es la actual
                        aria-label={`Slide ${index + 1}`}
                        // y aqui finalmente etiquetamos para cada diapo que exista
                    ></button>
                ))}
            </div>
            <div class="carousel-inner">
                {slides.map((slide, index) => (
                    <div
                        key={`slide-${index}`}
                        class={`carousel-item ${index === 0 ? "active" : ""}`}
                    >
                        <img src={slide.imgSrc} class="d-block w-100" alt={slide.imgAlt} />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>{slide.title}</h5>
                            <p>{slide.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button
                class="carousel-control-prev"
                type="button"
                data-bs-target={`#${id}`}
                data-bs-slide="prev"
            >
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button
                class="carousel-control-next"
                type="button"
                data-bs-target={`#${id}`}
                data-bs-slide="next"
            >
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default CarrouselCaptions;
