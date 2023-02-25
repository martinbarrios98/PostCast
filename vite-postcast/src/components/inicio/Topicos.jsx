import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react'
import styled from 'styled-components';

export const TopicosStyles = styled.section`
    margin: 4rem auto;
    max-width: 120rem;
    width: 95%;
    h2{
        font-size: 5rem;
    }
    .contenido-topicos{
        display: grid;
        gap: 3rem;
        margin-top: 8rem;
        @media (min-width: 768px){
            grid-template-columns: repeat(2, 1fr);
            align-items: center;
        }
        @media (min-width: 1024px){
            grid-template-columns: repeat(4 , 1fr);
            align-items: center;
        }
        .topico{
            display: grid;
            place-items: center;
            gap: 1rem;
            p{
                margin: 0;
                font-weight: 600;
                text-align: center;
                transition: all .2s ease-in-out;
                &:hover{
                    color: var(--verde);
                    text-decoration: line-through;
                }
            }
        }
    }
`;

const Topicos = () => {

    const [ topicos, setTopicos ] = useState([
        {
            icon: '/img/icon1.svg',
            titulo: 'Trabajo Remoto'
        },
        {
            icon: '/img/icon2.svg',
            titulo: 'Repensando la Programacion'
        },
        {
            icon: '/img/icon3.svg',
            titulo: 'Bases del Codigo'
        },
        {
            icon: '/img/icon4.svg',
            titulo: 'Seguridad Informatica'
        }
    ]);

    return (  
        <AnimatePresence mode='wait' >
            <TopicosStyles
                id='Topicos'
            >
                <h2>Algunos de nuestros temas</h2>
                <div className='contenido-topicos' >
                    {
                        topicos.map( to => (
                            <div className='topico' key={to.titulo} >
                                <img 
                                    src={to.icon}
                                    alt={to.titulo}
                                    title={to.titulo}
                                />
                                <p>{to.titulo}</p>
                            </div>
                        ))
                    }
                </div>
            </TopicosStyles>
        </AnimatePresence>
    );
}
 
export default Topicos;

