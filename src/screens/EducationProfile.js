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
        <div className="card">
          <div className="card-body">
            <h3 className="card-title text-center">Universidad</h3>
          </div>
          <div className="d-flex justify-content-center align-items-center pt-4">
            <img
              src={upiicsaImg}
              style={{ width: "300px", borderRadius: 30 }}
              className="card-img-top shadow-lg"
              alt="upiicsa"
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">
              Unidad Profesional Interdisciplinaria de Ingeniería y Ciencias
              Sociales y Administrativas
            </h5>
            <p className="card-text">Me gradue como ingeniero Informatico.</p>
            <a
              href={"https://www.upiicsa.ipn.mx/"}
              className="btn btn-primary d-flex justify-content-center"
            >
              {"Visita la upiicsa"}
            </a>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h3 className="card-title text-center">Preparatoria</h3>
          </div>
          <div className="d-flex justify-content-center align-items-center pt-4 ">
            <img
              src={ceb}
              style={{ width: "400px", borderRadius: 30 }}
              className="card-img-top shadow-lg"
              alt="upiicsa"
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">
              Centro de Estudios de Bachillerato 4/1 MTRO. MOISÉS SÁENZ GARZA
            </h5>
            <p className="card-text">
              Estudie la especializacion de informatica.
            </p>
            <a
              href={"https://www.ceb41.com/"}
              className="btn btn-primary d-flex justify-content-center"
            >
              {"Visita la CEB 4/1"}
            </a>
          </div>
        </div>

        <div className="card">
        <div className="card-body">
            <h3 className="card-title text-center">Secundaria</h3>
          </div>
          <div className="d-flex justify-content-center align-items-center pt-4 ">
            <img
              src={secImg}
              style={{ width: "400px", borderRadius: 30 }}
              className="card-img-top shadow-lg"
              alt="upiicsa"
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">
              Escuela Secundaria Diurna N°45 Maria Enriqueta Camarillo
            </h5>
            <p className="card-text">
              Estudie la especializacion de informatica.
            </p>
            <a
              href={"https://informativosec45tm.wixsite.com/secundaria45"}
              className="btn btn-primary d-flex justify-content-center"
            >
              {"Visita la secundaria N°45"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationProfile;
