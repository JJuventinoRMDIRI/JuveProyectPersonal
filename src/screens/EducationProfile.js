import React from "react";
import CardSimples from "../components/CardSimples";
import upiicsaImg from "../img/UPIICSAX.jpg";
import ceb from "../img/CEB41.JPG";
import secImg from "../img/sec45.png";
import bgEducation from "../img/graduation-02.jpg"

const EducationProfile = () => {

  const backgroundstyles = {
    backgroundImage: `url(${bgEducation})`,
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "150vh",
  };

  return (
    <div style={backgroundstyles}>
      <div className="container">
        <h1>Perfil educativo</h1>
        <div className="row">
          <div className="col-md-4">
            <h3>Universidad</h3>
            <CardSimples
              imgSrc={upiicsaImg}
              cardTitle={"Upiicsa"}
              cardText={
                "Unidad Profesional Interdisciplinaria de Ingeniería y Ciencias Sociales y Administrativas"
              }
              buttonText={"Visita la upiicsa"}
              buttonUrl={"https://www.upiicsa.ipn.mx/"}
            />
          </div>
          <div className="col-md-4">
            <h3>Preparatoria</h3>
            <CardSimples
              imgSrc={ceb}
              cardTitle={"CEB 4/1"}
              cardText={
                "Centro de Estudios de Bachillerato 4/1 MTRO. MOISÉS SÁENZ GARZA"
              }
              buttonText={"Visita la CEB 4/1"}
              buttonUrl={"https://www.ceb41.com/"}
            />
          </div>
          <div className="col-md-4">
            <h3>Secundaria</h3>
            <CardSimples
              imgSrc={secImg}
              cardTitle={"Secundaria Diurna N°45"}
              cardText={
                "Escuela Secundaria Diurna N°45 Maria Enriqueta Camarillo"
              }
              buttonText={"Visita la secundaria N°45"}
              buttonUrl={"https://informativosec45tm.wixsite.com/secundaria45"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationProfile;
