import React, {useState} from 'react';
import shortid from 'shortid';
import Error from './Error';

const Formulario = ({ guardarGasto, guardarCrearGasto }) => {

    const [ nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState('');
    const [error, guardarError] = useState(false);

    // cuando el usuario agrega un gasto
    const handleSubmit = (e) => {
        e.preventDefault()

    //validar 

    if(cantidad < 1 || isNaN(cantidad) || nombre.trim() === ''){
        guardarError(true)
        return
    };

    guardarError(false)

    //construir el gasto

    const gasto = {
        nombre, 
        cantidad,
        id: shortid.generate()
    }
    console.log(gasto)

    //pasar el gasto al componente principal
    guardarGasto(gasto);
    guardarCrearGasto(true)

    //resetear el form

    guardarNombre('');
    guardarCantidad(0);
    };

   

    return(
        <form 
        onSubmit={handleSubmit}>
            <h2>Agreagar tus gastos aquí</h2>
            { error ? <Error mensaje= "Ambos campos son obligatorios"
            /> : null }

            <div className="campo">
                <label>Nombre del gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder= "Ej. Transporte"
                    value={nombre}
                    onChange={e => guardarNombre(e.target.value)}
                />
            </div>

            <div className="campo">
                <label>Cantidad de gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder= "Ej. 300"
                    value={cantidad}
                    onChange={e => guardarCantidad(parseInt(e.target.value))}
                />
            </div>
            <input 
                type="submit" 
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />
        </form>
    );
}

export default Formulario;