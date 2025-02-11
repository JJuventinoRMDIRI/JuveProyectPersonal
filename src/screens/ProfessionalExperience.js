import React from "react";
import imgInguz from "../img/inguz.png";
import invercratos from "../img/invercratos.jpg"
import CardHorizontal from "../components/CardHorizontal";

const ProfessionalExperience = () => {
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
            <div className="text-center pt-5">
                <h1 className="fs-1">Experiencia profesional</h1>
            </div>
            <CardHorizontal
                imgSrc={imgInguz}
                cardTitle={"INGUZ DIGITAL, S.A.P.I. DE C.V. Institución de Fondos de Pagos Electrónicos"}
                cardText={"Inguz es una empresa fintech, encargada de prestamos financieros y banca electronica."}
                content={
                    <>
                        <p className="card-text">
                            Puesto: Front-End Jr. APP.
                        </p>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Supervisé y corregí errores en aplicaciones móviles para asegurar un funcionamiento óptimo y una experiencia de
                                usuario de alta calidad.</li>
                            <li className="list-group-item">Implementé nuevas funciones y mejoras en aplicaciones móviles, utilizando React Native como framework
                                principal.</li>
                            <li className="list-group-item">Colaboré con equipos multidisciplinarios para definir los objetivos de desarrollo y asegurar la correcta integración
                                de funcionalidades.</li>
                            <li className="list-group-item">Participé en la revisión de código, asegurando el cumplimiento de los estándares de calidad y buenas prácticas.</li>
                            <li className="list-group-item">Optimicé el rendimiento y la escalabilidad de las aplicaciones mediante el análisis y la implementación de
                                soluciones técnicas adecuadas.</li>
                            <li className="list-group-item">Documenté y gestioné los procesos de desarrollo para asegurar un flujo de trabajo eficiente, manteniendo
                                comunicación con los usuarios y stakeholders para recopilar feedback y definir mejoras futuras en la aplicación.</li>
                        </ul>
                    </>
                }
            />
            <CardHorizontal
                direction="left"
                imgSrc={invercratos}
                imgStyle={{ minHeight: '320px' }}
                cardTitle={"INVERCRATOS, S.A.P.I. DE C.V. Institución de Fondos de Pagos Electrónicos"}
                cardText={"Invecratos fue creada por iguz, esta empresa hizo un cambio de directiva que consigo trajo varios cambios, entre los principales se encuentra que se convertiria en lo que hasta la fecha de hoy es conocida como Inguz."}
                content={
                    <>
                        <p className="card-text">
                            Puesto: Becario Front-End Jr. APP – Prácticas Profesionales.
                        </p>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Apoyé en la corrección de errores y mejoras de rendimiento en las aplicaciones bajo la supervisión de
                                desarrolladores senior, participando en reuniones de planificación y revisión de código, adquiriendo experiencia
                                en el uso de GitHub para control de versiones.</li>
                            <li className="list-group-item">Desarrollé e implementé interfaces de usuario amigables y eficientes, asegurando la mejor experiencia de usuario.</li>
                            <li className="list-group-item">Implementé pruebas básicas de código utilizando ExpoGo para asegurar la calidad del producto final y realicé
                                documentación de procesos, manteniendo reportes sobre el progreso de las tareas asignadas.</li>
                        </ul>
                    </>
                }
            />
        </div>
    );
};

export default ProfessionalExperience;
