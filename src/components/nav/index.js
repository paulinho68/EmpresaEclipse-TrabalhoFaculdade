import React from 'react';

import { Container, Header, Navigation, Link } from './styles';

const Nav = ({ routeFunction }) => {
    return (
        <Container>
            <Header>
                <h2>Unidade 1</h2>
            </Header>
            <Navigation>
                <Link onClick={() => routeFunction('introducao')}>
                    Introdução
                </Link>
                <Link onClick={() => routeFunction('coordenador')}>
                    <p>Coordenador de Alimentos</p>
                    <p>e Bebidas</p>
                </Link>
            </Navigation>
        </Container>
    )
}

export default Nav;