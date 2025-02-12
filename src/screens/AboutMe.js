import React from 'react';
import CarrouselCaptions from '../components/CarrouselCaptions';
import lolImg from "../img/lol.jpg"
import tronImg from "../img/tronuprising.jpg"
import gatoImg from "../img/gato.jpg"
import AlertBadge from '../components/AlertBadge';

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
    ];

    const backgroundstyles = {
        // backgroundImage: `url(${bgProfessional})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "100vh",
        maxWidth: "100vw",
        paddingTop: "60px",
    };

    return (
        <div style={backgroundstyles}>
            <div class="text-center pt-4 pb-4">
                <h1 class="fs-1">Acerca de mi</h1>
            </div>
            {datos.length === 0 ? (
                console.log("Error al obtener la informacion de datos"),
                <AlertBadge/>
            ) : (<CarrouselCaptions
                slides={datos}
            />)}
        </div>
    );
}

export default AboutMe;
