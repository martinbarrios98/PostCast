import React from 'react'
import Bienvenida from './Bienvenida';
import DondeVenimos from './DondeVenimos';
import Episodios from './Episodios';
import Invitados from './Invitados';
import Novedades from './Novedades';
import Topicos from './Topicos';

const Inicio = () => {
    return (  
        <>
            <Bienvenida />
            <Episodios />
            <DondeVenimos />
            <Invitados />
            <Topicos />
            <Novedades />
        </>
    );
}
 
export default Inicio;