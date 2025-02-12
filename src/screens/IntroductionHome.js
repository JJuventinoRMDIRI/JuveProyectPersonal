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

  const cards = [
    {
      img: workExperience,
      title: "Experiencia profesional",
      text: "Conoce acerca de mi perfil profesional, desde donde comence, hasta donde e llegado.",
      link: "/Professional-Experience",
    },
    {
      img: educationImgProfile,
      title: "Perfil Educativo",
      text: "Conoce mi trayectoria academica.",
      link: "/Education-Profile",
    },
    {
      img: aboutME,
      title: "Acerca de mi",
      text: "Explora acerca de mis gustos, pasatiempos, intereses, etc.",
      link: "/About-Me",
    },
  ];

  return (
    <div style={backgroundstyles}>
      <div class="row featurette d-flex align-items-center justify-content-center text-center mt-5">
        <div class="col-md-7">
          <h2 class="featurette-heading fw-normal lh-1 fs-1">
            Javier Juventino
            <span class="text-secondary "> Ramos Maldonado</span>
          </h2>
          <TypingText
            text={fullText}
            speed={40}
            className="lead text-center text-shadow fs-4"
          />
        </div>
        <div class="col-md-5 text-center">
          <img
            src={imgJavier}
            class="img-fluid rounded shadow"
            alt="Javier Juventino"
            style={{ width: "100%", maxWidth: "400px", height: "auto" }}
          />
        </div>
      </div>

      {cards.length === 0 ? console.log("Error en el arreglo, no contiene informacion") : (
        <div class="row mt-5 p-5">
        {cards.map((item, index) => (
          <CardOverlay
            key={index}
            imgSrc={item.img}
            cardTitle={item.title}
            cardText1={item.text}
            link={item.link}
          />
        ))}
      </div>
      )} 
      
    </div>
  );
};

export default IntroductionHome;
