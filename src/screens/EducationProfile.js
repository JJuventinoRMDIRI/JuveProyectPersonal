import React from "react";
import CardSimples from "../components/CardSimples";
import upiicsaImg from "../img/UPIICSAX.jpg";
import ceb from "../img/CEB41.JPG";
import secImg from "../img/sec45.png";
import bgEducation from "../img/graduation-02.jpg";
import AlertBadge from "../components/AlertBadge";

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

  const cardSimpleInfo = [
    {
      img: upiicsaImg,
      imgAlt: "upiicsa",
      imgStyle: null,
      titleHeader: "Universidad",
      title:
        "Unidad Profesional Interdisciplinaria de Ingeniería y Ciencias Sociales y Administrativas",
      text: "Me gradue como ingeniero Informatico.",
      btnUrl: "https://www.upiicsa.ipn.mx/",
      btnText: "Visita la upiicsa",
    },
    {
      img: ceb,
      imgAlt: "ceb41",
      imgStyle: { width: "400px" },
      titleHeader: "Preparatoria",
      title: "Centro de Estudios de Bachillerato 4/1 MTRO. MOISÉS SÁENZ GARZA",
      text: "Estudie la especializacion de informatica.",
      btnUrl: "https://www.ceb41.com/",
      btnText: "Visita la upiicsa",
    },
    {
      img: secImg,
      imgAlt: "sec45",
      imgStyle: { width: "400px" },
      titleHeader: "Secundaria",
      title: "Escuela Secundaria Diurna N°45 Maria Enriqueta Camarillo",
      text: "Escuela secundaria que me ayudo a definir mi rama e intereses de estudio.",
      btnUrl: "https://informativosec45tm.wixsite.com/secundaria45",
      btnText: "Visita la secundaria N°45",
    },
  ];

  return (
    <div style={backgroundstyles}>
      <div class="text-center pt-5">
        <h1 class="fs-1">Perfil academico</h1>
        <p class="fs-4">A continuacion presento mi trayectoria academica</p>
      </div>

      {cardSimpleInfo.length === 0 ? (
        console.log("Hubo un al obtener los datos de Educacion"),
        
          <AlertBadge/>
        
      ) : (
        <div class="card-group p-5">
          {cardSimpleInfo.map((item, index) => (
            <CardSimples
              key={index}
              imgSrc={item.img}
              imgAlt={item.imgAlt}
              imgStyle={item.imgStyle ? item.imgStyle : null}
              cartTitleHeader={item.titleHeader}
              cardTitle={item.title}
              cardText={item.text}
              buttonUrl={item.btnUrl}
              buttonText={item.btnText}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default EducationProfile;
