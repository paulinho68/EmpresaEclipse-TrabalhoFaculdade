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
                <Link onClick={() => routeFunction('chefeDeFila')}>
                    Chefe de Fila
                </Link>
                <Link onClick={() => routeFunction('bartender')}>
                    Bartender
                </Link>
                <Link onClick={() => routeFunction('garcom')}>
                    Garçom
                </Link>
                <Link onClick={() => routeFunction('cumim')}>
                    Cumim
                </Link>
                <Link onClick={() => routeFunction('chefeDeCozinha')}>
                    Chefe de Cozinha
                </Link>
                <Link onClick={() => routeFunction('auxiliarDeCozinha')}>
                    Auxiliar de Cozinha
                </Link>
                <Link onClick={() => routeFunction('uniforme')}>
                    Uniforme
                </Link>
                <Link onClick={() => routeFunction('crachas')}>
                    Crachás de Identificação
                </Link>
            </Navigation>
        </Container>
    )
}

export default Nav;