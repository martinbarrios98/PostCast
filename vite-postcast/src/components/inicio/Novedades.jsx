import React from 'react'
import styled from 'styled-components';

import { BotonStyles } from './Bienvenida';

export const NovedadesStyles = styled.section`
    margin: 9rem 0 0 0;
    -webkit-clip-path: polygon(0 23%, 100% 0, 100% 100%, 0% 100%);
    clip-path: polygon(0 23%, 100% 0, 100% 100%, 0% 100%);
    background-image: var(--backgroundAzul);
    padding: 8rem 0 3rem 0;
    .contenido-novedades{
        max-width: 120rem;
        width: 95%;
        margin: 2rem auto;
        display: grid;
        gap: 3rem;
        place-items: center;
        h2{
            color: var(--blanco);
            text-align: center;
        }
    }
`;

const Novedades = () => {
    return (  
        <NovedadesStyles>
            <div className='contenido-novedades' >
                <h2>¿Quieres las ultimas novedades?</h2>
                <BotonStyles type='button' >ESCUCHA LOS ULTIMOS EPISODIOS</BotonStyles>
            </div>
        </NovedadesStyles>
    );
}
 
export default Novedades;
