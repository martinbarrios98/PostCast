import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react'

import styled from 'styled-components';

export const DondeVenimosStyles = styled.section`
    max-width: 120rem;
    width: 95%;
    margin: 4rem auto;
    display: grid;
    gap: 2rem;
    display: grid;
    @media (min-width: 768px){
        grid-template-columns: 2fr 2fr;
        align-items: center;
    }
    .contenedor-img{
        display: grid;
        place-items: center;
    }
    .contenido{
        h2{
            margin: 0 0 2rem 0;
            font-size: 5rem;
        }
        p{
            margin: 0;
            line-height: 1.5;
            text-align: justify;
            transition: all .2s ease-in-out;
            display: ${props => props.mas ? 'inherit ' : '-webkit-box'};
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 7;
            overflow: hidden;
            cursor: pointer;
        }
    }
`;

const DondeVenimos = () => {

    const [ mas, setMas ] = useState(false);

    const handleSetMas = () => setMas( mas ? false : true );

    return (  
        <AnimatePresence mode='wait'>
            <DondeVenimosStyles
                mas={mas}
                id="Nosotros"
            >
                <div className='contenedor-img' >
                    <img 
                        src='/img/phone.png'
                        alt='Phone'
                        title='Phone'
                    />
                </div>
                <div className='contenido' >
                    <h2>De Donde Venimos</h2>
                    <p
                        onClick={() => handleSetMas()}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quisquam incidunt cupiditate, dignissimos aperiam totam. In pariatur minus omnis sapiente ut ipsum distinctio, quas a eveniet magni quam, fugit facilis. 
                        {' '}
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum quidem, iusto repellat enim ullam cupiditate ratione minima placeat impedit quos ipsam illum sequi quam aperiam, fugiat beatae tempora. Dolorum, delectus?
                    </p>
                </div>
            </DondeVenimosStyles>
        </AnimatePresence>
    );
}
 
export default DondeVenimos;
