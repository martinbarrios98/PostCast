import React, { useState } from 'react'
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai'

import Navegacion from './Navegacion';

export const HeaderStyles = styled.header`
    padding: 2rem 0;
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    flex-wrap: wrap;
    @media (min-width: 1024px){
        justify-content: space-around;
    }
    .contenedor-logo{
        display: grid;
        place-items: center;
        padding: 0 2rem;
        cursor: pointer;
        img{
            width: 4rem;
        }
    }
    .contenedor-icono{
        padding: 0 2rem;
        display: grid;
        place-items: center;
        @media (min-width: 1024px){
            display: none;
        }
    }
`;



const Header = () => {

    const [ mostrar, setMostrar ] = useState(false);

    const handleMostrar = () => setMostrar( mostrar ? false : true );

    return (  
        <HeaderStyles>
            <div className='contenedor-logo' >
                <img 
                    src='/img/logo.svg'
                    alt='Inicio - Postcast'
                    title='Inicio - Postcast'
                />
            </div>
            <div className='contenedor-icono' onClick={() => handleMostrar()} >
                {
                    mostrar ? <AiOutlineClose    fontSize={'30px'} color="var(--oscuro)" />
                    :  <FaBars fontSize={'30px'} color="var(--oscuro)" />
                }
            </div>
            <Navegacion mostrar={mostrar} />
        </HeaderStyles>
    );
}
 
export default Header;