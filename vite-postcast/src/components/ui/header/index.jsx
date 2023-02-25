import React, { useState } from 'react'
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';

import Navegacion from './Navegacion';

export const HeaderStyles = styled.header`
    padding: 2rem 0 0 0;
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    flex-wrap: wrap;
    position: sticky;
    top: 0;
    background-color: var(--blanco);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    z-index: 99;
    @media (min-width: 1024px){
        justify-content: space-around;
        padding: 2rem 0;
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

    const navigate = useNavigate();

    const [ mostrar, setMostrar ] = useState(false);

    const handleMostrar = () => setMostrar( mostrar ? false : true );

    const handleClick = () => window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    return (  
        <HeaderStyles id='header' >
            <div className='contenedor-logo' onClick={() => handleClick()} >
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