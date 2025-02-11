import React from "react";
import TypingText from "../components/TypingText";
import imgJavier from "../img/Javier.jpg";
import workExperience from "../img/workexpereice.png";
import aboutME from "../img/hobbies.jpg";
import educationImgProfile from "../img/educationProfile.jpg";
import CardOverlay from "../components/CardOverlay";

const IntroductionHome = () => {
  const backgroundstyles = {
    // backgroundImage: `url(${bgHome})`,
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "100vh",
    maxWidth: "100vw",
    paddingTop: "60px",
  };

  const fullText = `Bienvenidos a mi página web, Soy Desarrollador Jr. Front-End APP en React Native, apasionado por crear soluciones digitales de alta calidad. Cuento con experiencia supervisando, corrigiendo errores y mejorando aplicaciones móviles, priorizando en mejorar el rendimiento y experiencia de usuario. He colaborado en la implementación de nuevas funcionalidades y mejoras clave, aplicando mis habilidades técnicas y de trabajo para lograr proyectos a su máximo potencial. Busco seguir creciendo en un entorno profesional junto a expertos del sector, para seguir impulsando la innovación en el desarrollo de aplicaciones móviles.`;

  return (
    <div style={backgroundstyles}>
      <div className="row featurette d-flex align-items-center justify-content-center text-center mt-5">
        <div className="col-md-7">
          <h2 className="featurette-heading fw-normal lh-1 fs-1">
            Javier Juventino 
            <span className="text-secondary "> Ramos Maldonado</span>
          </h2>
          <TypingText
            text={fullText}
            speed={40}
            className="lead text-center text-shadow fs-4"
          />
        </div>
        <div className="col-md-5 text-center">
          <img
            src={imgJavier}
            className="img-fluid rounded shadow"
            alt="Javier Juventino"
            style={{ width: "100%", maxWidth: "400px", height: "auto" }}
          />
        </div>
      </div>

      <div className="row mt-5 p-5">
        <CardOverlay
          imgSrc={workExperience}
          cardTitle={"Experiencia profesional"}
          cardText1={
            "Conoce acerca de mi perfil profesional, desde donde comence, hasta donde e llegado."
          }
          link={"/Professional-Experience"}
        />
        <CardOverlay
          imgSrc={educationImgProfile}
          cardTitle={"Perfil Educativo"}
          cardText1={"Conoce mi trayectoria academica."}
          link={"/Education-Profile"}
        />
        <CardOverlay
          imgSrc={aboutME}
          cardTitle={"Acerca de mi"}
          cardText1={
            "Explora acerca de mis gustos, pasatiempos, intereses, etc."
          }
          link={"/About-Me"}
        />
      </div>
    </div>
  );
};

export default IntroductionHome;
