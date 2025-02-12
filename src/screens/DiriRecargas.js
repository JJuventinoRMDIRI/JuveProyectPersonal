import React, { useState } from 'react';

const DiriRecargas = () => {
    const [phone, setPhone] = useState("");


    const handleSubmitPhone = async (event) => {
        event.preventDefault();

        try {
            console.log(phone, '<<<------aqui esta telefono')

            const url = "https://serviciosweb.diri.mx/webresources/validaestatusDN2"

            const data = {
                dn: phone,
                marca: 1
            };

            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer Token 123dagrtetad34gGDs!'
                },
            });

            console.log(response, '<-----aqui debe ser response')

            if (!response.ok) {
                throw new Error(`Error en la peticion: ${response.status}`)
            }

            const result = await response.json();
            console.log("Respuesta de la peticion: ", result);

        } catch (error) {
            console.error("error en la petcion: ", error)
        }

    };






    return (
        <div className="container-fluid" style={{ paddingTop: '60px' }}>
            <div className="row justify-content-center">
                <div className="col-6 justify-content-center text-center">
                    <h2>¿Aun no estas registrado?</h2>
                    <p>Ingresa tu número telefónico para realizar una recarga</p>
                    <div className="row">
                        <form onSubmit={handleSubmitPhone}>
                            <div className="col-12 my-4">
                                <label ></label>
                                <input
                                    name="phoneNumber"
                                    type="number"
                                    placeholder="Ingresa tu numero celular de 10 digitos"
                                    required
                                    style={{ borderRadius: 10, width: "100%", textAlign: "center" }}
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}></input>
                            </div>
                            <div className="col-12 my-3">
                                <button
                                    type="submit"
                                    id="submit-btn"
                                    className="py-2"
                                    style={{ backgroundColor: "#8be9e9", borderRadius: 10, color: "#FFFFFF", fontWeight: 700, width: "100%", border: 0 }}>Ingresar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DiriRecargas;
