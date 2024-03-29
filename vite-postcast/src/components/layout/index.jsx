import React from 'react'
import { Helmet } from 'react-helmet'
import { useLocation, Outlet } from 'react-router-dom';
import Footer from '../ui/footer';

import Header from '../ui/header';

import styled from 'styled-components';
import BotonInicio from '../ui/header/BotonInicio';

const ContainerStyles = styled.main`
    margin: 2rem 0;
    min-height: 100vh;
`;


const Layout = ({ pagina, description }) => {

    const { pathname } = useLocation();

    return (  
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name='title' content={pagina} />
                <meta name='description' content={description} />
                <link rel="icon" type="image/svg+xml" href="/img/logo.svg" />
                <link rel="canonical" href={window.location.origin+pathname} />
                <title>{pagina || 'Inicio - Postcast'}</title>
            </Helmet>
            <Header />
            <ContainerStyles>
                <Outlet />
            </ContainerStyles>
            <Footer />
        </>
    );
}
 
export default Layout;