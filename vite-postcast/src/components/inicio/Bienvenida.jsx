import React from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';

export const BienvenidaStyles = styled(motion.section)`
    display: grid;
    gap: 2rem;
    margin: 4rem auto;
    max-width: 120rem;
    width: 95%;
    h1{
        font-family: var(--fuenteTitulos);
        font-size: 6rem;
        line-height: 1.3;
        margin: 0;
        span{
            &:first-of-type{
                text-decoration: line-through;
            }
            &:last-of-type{
                color: var(--azul);
            }
        }
    }
    p{
        margin: 0;
        text-align: justify;
        line-height: 1.5;
    }
`;

export const BotonStyles = styled.button`
    background-color: var(--verde);
    padding: 2rem;
    border: none;
    font-weight: 600;
    text-transform: uppercase;
    border-radius: 1rem;
    cursor: pointer;
    transition: all .2s ease-in-out;
    &:hover{
        background-image: var(--verdeHover);
        color: var(--blanco);
        transform: scale(1.02);
    }
    @media (min-width: 768px){
        width: 30%;
    }
`;


const Bienvenida = () => {
    return (
        <AnimatePresence mode='wait' >
            <BienvenidaStyles>
                <h1>
                    Hello <span>world </span>
                    pale blue dot <span>.</span>
                </h1> 
                <p>El portal de podcasts que explorsa el mundo de la programación y la tecnologia. Nuevos Episodios, todos los jueves cada 15 dias.</p>
                <BotonStyles
                    type='button'
                >Conoce más</BotonStyles>
            </BienvenidaStyles>
        </AnimatePresence>
    )
}
 
export default Bienvenida;