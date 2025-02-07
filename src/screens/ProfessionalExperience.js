import React from "react";
import CardImagesCaps from "../components/CardImagesCaps";
import imgInguz from "../img/inguz.png";
import bgProfessional from "../img/PorfesionalExperience.jpg"

const ProfessionalExperience = () => {
    const backgroundstyles = {
        backgroundImage: `url(${bgProfessional})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "150vh",
    };

    return (
        <div style={backgroundstyles}>
            <div className="container">
                <h1>Experiencia profesional</h1>
                <CardImagesCaps
                    imgSrc={imgInguz}
                    imgAlt={"Inguz"}
                    cardTitle={"Inguz"}
                    cardText={"Institucion de fondo de pagos electronicos"}
                    cardTextSupressed="aunnn viveeee"
                />
            </div>
        </div>
    );
};

export default ProfessionalExperience;
