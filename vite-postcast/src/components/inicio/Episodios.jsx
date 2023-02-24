import { AnimatePresence } from 'framer-motion';
import React from 'react'

import styled from 'styled-components';

export const EpisodiosStyles = styled.section`
    margin: 4rem 0;
    background-image: var(--backgroundAzul);
    padding: 15rem 0;
    -webkit-clip-path: polygon(0 9%, 100% 0%, 100% 89%, 0% 100%);
    clip-path: polygon(0 9%, 100% 0%, 100% 89%, 0% 100%);
    @media (min-width: 768px){
        padding: 6rem 0;
    }
    h2{
        max-width: 120rem;
        width: 95%;
        margin: 3rem auto;
        color: var(--blanco);
        font-size: 5rem;
    }
    .contenido-episodios{
        max-width: 120rem;
        width: 95%;
        margin: 0 auto;
        display: grid;
        gap: 2rem;
        padding: 3rem 0;
        @media (min-width: 768px){
            grid-template-columns: repeat(2, 1fr);
            align-items: center;
            padding: 3rem 4rem;
        }
        .episodio{
            iframe{
                width: 100%;
                height: 24.5rem;
                border: none;
            }
        }
    }
`;


const Episodios = () => {
    return (  
        <AnimatePresence mode='wait'>
            <EpisodiosStyles
                id='Episodios'
            >
                <h2>Episodios</h2>
                <div className='contenido-episodios' >
                    <div className="episodio">
                        <iframe src="https://open.spotify.com/embed/track/3WY8ecMJJjdepU2k2NoFv1" allow="encrypted-media"></iframe>
                    </div>
                    <div className="episodio">
                        <iframe src="https://open.spotify.com/embed/track/5iEDwEp82uLN3X6llJdqen" allow="encrypted-media"></iframe>
                    </div>
                    <div className="episodio">
                        <iframe src="https://open.spotify.com/embed/track/6rQ9qJPvInEqSzlh89LsPJ" allow="encrypted-media"></iframe>
                    </div>
                    <div className="episodio">
                        <iframe src="https://open.spotify.com/embed/track/5QRAfvKPyQpwt897Jc0glg" allow="encrypted-media"></iframe>
                    </div>
                </div>
            </EpisodiosStyles>
        </AnimatePresence>
    );
}
 
export default Episodios;

