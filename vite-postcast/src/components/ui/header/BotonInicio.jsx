import React from 'react'
import { IoIosArrowDropupCircle } from 'react-icons/io'
import styled from 'styled-components';

export const BotonInicioStyles = styled.div`
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    z-index: 99;
    cursor: pointer;
`;


const BotonInicio = () => {

    const handleClick = () => {

        const element = document.querySelector('#header');

        return element.scrollIntoView({
            behavior: 'smooth'
        });

    }

    return (  
        <BotonInicioStyles
            onClick={() => handleClick()}
        >
            <IoIosArrowDropupCircle 
                fontSize={'60px'}
                color='var(--verde)'
            />
        </BotonInicioStyles>
    );
}
 
export default BotonInicio;
