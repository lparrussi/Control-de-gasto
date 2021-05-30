import React, { Fragment, useState } from 'react';
import Error from './Error'

const Pregunta = ({ guardarPresupuesto, guardarRestante, actualizarPregunta }) => {

    //Definir el state

    const [ cantidad, guardarCantidad ] = useState(0);

    const [ error, guardarError ] = useState(false); //inicia como false, porque no hay error en el inicio

    //Funcion que lee el presupuesto

    const handleOnChange = (e) => {
        guardarCantidad(parseInt(e.target.value))
    };

    //submit para defininr el presupuesto

    const handleSubmit = (e) => {
        e.preventDefault()

    //validar

     if(cantidad < 1 || isNaN(cantidad) ){  //si lo que me pasan es menor a 1, o no es un numero, seteo el state de error en true 
         guardarError(true)
        return
     }

     // si pasa la validación 

     guardarError(false);
     guardarPresupuesto(cantidad);
     guardarRestante(cantidad);
     actualizarPregunta(false);

    };

    



    return (
       <Fragment>
           <h2>Coloca tu presupuesto </h2>

           {error ? <Error mensaje="El presupuesto es incorrecto"/> : null}

           <form
                onSubmit = {handleSubmit}>
               <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto $"
                    onChange=  {handleOnChange}
               />

               <input 
               type="submit"
               className="button-primary u-full-width"
               value="Definir presupuesto"
               />

           </form>
       </Fragment>
    );
};
export default Pregunta;