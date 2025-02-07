import React from 'react';
import CarrouselCaptions from '../components/CarrouselCaptions';
import lolImg from "../img/lol.jpg"
import tronImg from "../img/tronuprising.jpg"
import gatoImg from "../img/gato.jpg"

const AboutMe = () => {
    const datos = [
        {
            imgSrc: lolImg,
            imgAlt: "Slide 1",
            title: "Videojuego Mas Jugado",
            description: "League of legends"
        },
        {
            imgSrc: tronImg,
            imgAlt: "Slide 2",
            title: "Serie Favorita",
            description: "Tron Uprising."
        },
        {
            imgSrc: gatoImg,
            imgAlt: "Slide 3",
            title: "Animal favorito",
            description: "Gato."
        }
    ]

    return (
        <div className='container mt-4'>
            <h1>Acerca de mi</h1>
            <CarrouselCaptions
                slides={datos}
            />
        </div>
    );
}

export default AboutMe;
