import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react'

import styled from 'styled-components';

export const InvitadosStyles = styled.section`
    margin: 4rem 0;
    h2{
        margin: 0 auto;
        max-width: 120rem;
        width: 95%;
        font-size: 5rem;
    }
    .contenido-invitados{
        display: grid;
        margin: 4rem 0;
        @media (min-width: 768px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media (min-width: 1024px){
            grid-template-columns: repeat(3, 1fr);
        }
        div{
            height: 29rem;
            background-position: center center;
            background-size: cover;
            background-repeat: no-repeat;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            justify-content: flex-end;
            p{
                color: var(--verde);
                font-weight: 600;
                text-transform: uppercase;
                background: rgba(0, 0 , 0, .5);
                padding: 1rem;
                border-radius: 1rem;
            }
        }
    }
`;

const Invitados = () => {

    const [ invitados, setInvitados ] = useState([
        {
            img: '/img/grace-hopper.png',
            titulo: 'Grace Hopper'
        },
        {
            img: '/img/Katie-Bouman.png',
            titulo: 'Katie Bouman'
        },
        {
            img: '/img/Margaret_Hamilton.png',
            titulo: 'Margaret Hamilton'
        },
        {
            img: '/img/computer.png',
            titulo: 'Computer'
        },
        {
            img: '/img/operators.png',
            titulo: 'Operators'
        },
        {
            img: '/img/susan-kare.png',
            titulo: 'Susan Kare'
        }
    ]);

    return (  
        <AnimatePresence mode='wait' >
            <InvitadosStyles
                id='Entrevistas'
            >
                <h2>Invitadas/os Estelares</h2>
                <div className='contenido-invitados' >
                    {
                        invitados.map( (inv, i) => (
                            <div
                                key={i}
                                style={{
                                    backgroundImage: `url(${inv.img})`
                                }}

                            ><p>{inv.titulo}</p></div>
                        ))
                    }
                </div>
            </InvitadosStyles>
        </AnimatePresence>
    );
}
 
export default Invitados;