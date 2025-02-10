import React from "react";
import CardImagesCaps from "../components/CardImagesCaps";
import imgInguz from "../img/inguz.png";
import bgProfessional from "../img/PorfesionalExperience.jpg";
import invercratos from "../img/invercratos.jpg"

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




            <div className="card mb-3 m-5" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={imgInguz} style={{ minHeight: '420px' }} className="img-fluid rounded-start" alt="Inguz" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">INGUZ DIGITAL, S.A.P.I. DE C.V. Institución de Fondos de Pagos
                                Electrónicos</h5>
                            <p className="card-text">
                                Inguz es una empresa fintech, encargada de prestamos financieros y banca electronica.
                            </p>
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
                        </div>
                    </div>
                </div>
            </div>




            <div className="card mb-3 m-5" >
                <div className="row g-0 ">
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">INGUZ DIGITAL, S.A.P.I. DE C.V. Institución de Fondos de Pagos
                                Electrónicos</h5>
                            <p className="card-text">
                                Inguz es una empresa fintech, encargada de prestamos financieros y banca electronica.
                            </p>
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
                        </div>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center align-items-center rounded-end">
                        <img src={invercratos} style={{ minHeight: '320px'}} className="img-fluid" alt="Inguz" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProfessionalExperience;
