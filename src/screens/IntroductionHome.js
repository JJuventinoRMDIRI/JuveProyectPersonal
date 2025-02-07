import React from "react";
import bgHome from "../img/bgHome.jpg";
import gatoChambeador from "../img/gatochambeador.gif"

const IntroductionHome = () => {
  const backgroundstyles = {
    backgroundImage: `url(${bgHome})`,
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "100vh",
  };

  return (
    <div style={backgroundstyles}>
      <div
        className="d-flex flex-column justify-content-center aling-items-center"
        style={{ minHeight: "60hv" }}
      >
        <h1 className="text-center text-white mt-10">Introduccion</h1>
        <p className="text-center text-white">
          Hola esta es una pagina de react como introduccion para mi capacitacion, favor de visitar los
          demas apartados que se muestran en la pagina :3
        </p>
        <img src={gatoChambeador}
        alt="Gift Gato chambeando"
        style={{height: '50vh', width: '50vh'}}
        className="mt-3 mx-auto"
        />
      </div>
    </div>
  );
};

export default IntroductionHome;
