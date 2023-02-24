import React, { useState } from 'react'

import styled from 'styled-components';

export const NavegacionStyles = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    flex-basis: 100%;
    background: var(--backgroundAzul);
    padding: ${props => props.mostrar ? '2rem 0' : '0'};
    height: ${props => props.mostrar ? '20rem' : '0'};
    justify-content: center;
    transition: all .2s ease-in-out;
    overflow: hidden;
    @media (min-width: 768px){
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    @media (min-width: 1024px){
        padding: 2rem 0;
        height: auto;
        background: none;
        flex-basis: 50%;
        overflow: initial;
    }
    a{
        color: var(--blanco);
        text-align: right;
        padding: 0 2rem;
        transition: all .3s ease-in-out;
        @media (min-width: 1024px){
            color: var(--oscuro);
            &:hover{
                color: var(--verde);
                text-decoration: line-through;
            }
        }
    }
`;


const Navegacion = ({ mostrar }) => {
    
    const [ routes, setRoutes ] = useState([  
        {
            nombre: 'Episodios',
            titulo: 'Episodios',
            url: '#Episodios'
        },
        {
            nombre: 'Nosotros',
            titulo: 'Nosotros',
            url: '#Nosotros'
        },
        {
            nombre: 'Entrevistas',
            titulo: 'Entrevistas',
            url: '#Entrevistas'
        },
        {
            nombre: 'Topicos',
            titulo: 'Topicos',
            url: '#Topicos'
        }
    ]);

    return (  
        <NavegacionStyles
            mostrar={mostrar}
        >
            {
                routes.map( rt => (
                    <a 
                        href={rt.url}
                        title={rt.titulo}
                        key={rt.url}
                    >{rt.nombre}</a>
                ))
            }
        </NavegacionStyles>
    );
}
 
export default Navegacion;