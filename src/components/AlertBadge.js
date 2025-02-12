import React from 'react';
import { Link } from 'react-router-dom';

const AlertBadge = (props) => {
    const {
        link = "/"
    } = props;

    return (
        <div class="container d-flex justify-content-center">
            <div class="col-4 alert alert-danger mt-1" role="alert">
                <p class="text-center">¡UPS!, parece que te as encontrado con un error, por favor intentalo mas tarde.</p>
                <p class="text-center"><strong>Da click aqui para regresar al inicio</strong></p>
                <Link
                    to={link}
                    className="stretched-link"
                ></Link>
            </div>
        </div>
    );
}

export default AlertBadge;
