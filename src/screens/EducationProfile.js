import React from "react";
import CardSimples from "../components/CardSimples";
import upiicsaImg from "../img/UPIICSAX.jpg";
import ceb from "../img/CEB41.JPG";
import secImg from "../img/sec45.png";
import bgEducation from "../img/graduation-02.jpg";

const EducationProfile = () => {
  const backgroundstyles = {
    backgroundImage: `url(${bgEducation})`,
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
      <div className="text-center pt-5">
        <h1 className="fs-1">Perfil academico</h1>
        <p className="fs-4">A continuacion presento mi trayectoria academica</p>
      </div>

      <div className="card-group p-5">
        <CardSimples
          imgSrc={upiicsaImg}
          imgAlt={"upiicsa"}
          cartTitleHeader={"Universidad"}
          cardTitle={"Unidad Profesional Interdisciplinaria de Ingeniería y Ciencias Sociales y Administrativas"}
          cardText={"Me gradue como ingeniero Informatico."}
          buttonUrl={"https://www.upiicsa.ipn.mx/"}
          buttonText={"Visita la upiicsa"}
        />

        <CardSimples
          imgSrc={ceb}
          imgAlt={"ceb41"}
          imgStyle={{ width: "400px" }}
          cartTitleHeader={"Preparatoria"}
          cardTitle={"Centro de Estudios de Bachillerato 4/1 MTRO. MOISÉS SÁENZ GARZA"}
          cardText={"Estudie la especializacion de informatica."}
          buttonUrl={"https://www.ceb41.com/"}
          buttonText={"Visita la CEB 4/1"}
        />

        <CardSimples
          imgSrc={secImg}
          imgAlt={"sec45"}
          imgStyle={{ width: "400px" }}
          cartTitleHeader={"Secundaria"}
          cardTitle={"Escuela Secundaria Diurna N°45 Maria Enriqueta Camarillo"}
          cardText={"Escuela secundaria que me ayudo a definir mi rama e intereses de estudio."}
          buttonUrl={"https://informativosec45tm.wixsite.com/secundaria45"}
          buttonText={"Visita la secundaria N°45"}
        />

      </div>
    </div>
  );
};

export default EducationProfile;
