import React, { useState } from 'react'
import styled from 'styled-components';
import { BsSpotify, BsInstagram, BsTwitter, BsFacebook, BsTelegram } from 'react-icons/bs'

export const FooterStyles = styled.div`
    display: grid;
    gap: 2rem;
    place-items: center;
    padding: 2rem 0;
    @media (min-width: 768px){
        grid-template-columns: 2fr 2fr;
        align-items: center;
    }
    .redes{
        display: flex;
        gap: 3rem;
        align-items: center;
        justify-content: center;
        @media (min-width: 1024px){
            svg{
                transition: all .3s ease-in-out;
                &:hover{
                    color: var(--verde)!important;
                }
            }
        }
    }
`;


const Footer = () => {

    const [ redes, setRedes ] = useState([
        {
            componente: <BsSpotify fontSize={'20px'} color="var(--oscuro)" />,
            url: 'https://www.spotify.com/mx/',
            titulo: 'Spotify',
            target: '_blank'
        },
        {
            componente: <BsInstagram fontSize={'20px'} color="var(--oscuro)" />,
            url: 'https://www.instagram.com/',
            titulo: 'Instagram',
            target: '_blank'
        },
        {
            componente: <BsTwitter fontSize={'20px'} color="var(--oscuro)" />,
            url: 'https://twitter.com/',
            titulo: 'Twitter',
            target: '_blank'
        },
        {
            componente: <BsFacebook fontSize={'20px'} color="var(--oscuro)" />,
            url: 'https://es-la.facebook.com/',
            titulo: 'Facebook',
            target: '_blank'
        },
        {
            componente: <BsTelegram fontSize={'20px'} color="var(--oscuro)" />,
            url: 'https://web.telegram.org/',
            titulo: 'Telegram',
            target: '_blank'
        },
    ]);

    return (  
        <FooterStyles>
            <p>© 2019 - Hello blue pale dot</p>
            <div className='redes' >
                {
                    redes.map( (red, i) => (
                        <a
                            href={red.url}
                            title={red.titulo}
                            target={red.target}
                            key={i}
                        >
                            {red.componente}
                        </a>
                    ))
                }
            </div>
        </FooterStyles>
    );
}
 
export default Footer;