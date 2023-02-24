import React from 'react'
import Bienvenida from './Bienvenida';
import DondeVenimos from './DondeVenimos';
import Episodios from './Episodios';
import Invitados from './Invitados';

const Inicio = () => {
    return (  
        <>
            <Bienvenida />
            <Episodios />
            <DondeVenimos />
            <Invitados />
        </>
    );
}
 
export default Inicio;