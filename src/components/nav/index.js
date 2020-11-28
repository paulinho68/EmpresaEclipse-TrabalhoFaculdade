import React from 'react';

import { Container, Header, Navigation, Link } from './styles';

const Nav = ({ routeFunction }) => {
    return (
        <Container>
            <Header>
                <h2>Unidade 1</h2>
            </Header>
            <Navigation>
                <Link className="nav_link" onClick={(e) => routeFunction('introducao', e)}>
                    <p>Introdução</p>
                </Link>
                <Link className="nav_link" onClick={(e) => routeFunction('coordenador', e)}>
                    <p>Coordenador de Alimentos</p>
                    <p>e Bebidas</p>
                </Link>
                <Link className="nav_link" onClick={(e) => routeFunction('chefeDeFila', e)}>
                    <p>Chefe de Fila</p>
                </Link>
                <Link className="nav_link" onClick={(e) => routeFunction('bartender', e)}>
                    <p>Bartender</p>
                </Link>
                <Link className="nav_link" onClick={(e) => routeFunction('garcom', e)}>
                    <p>Garçom</p>
                </Link>
                <Link className="nav_link" onClick={(e) => routeFunction('cumim', e)}>
                    <p>Cumim</p>
                </Link>
                <Link className="nav_link" onClick={(e) => routeFunction('chefeDeCozinha', e)}>
                    <p>Chefe de Cozinha</p>
                </Link>
                <Link className="nav_link" onClick={(e) => routeFunction('auxiliarDeCozinha', e)}>
                    <p> Auxiliar de Cozinha</p>
                </Link>
                <Link className="nav_link" onClick={(e) => routeFunction('uniforme', e)}>
                    <p>Uniforme</p>
                </Link>
                <Link className="nav_link" onClick={(e) => routeFunction('crachas', e)}>
                    <p>Crachás de Identificação</p>
                </Link>
                <Link className="nav_link" onClick={(e) => routeFunction('quiz', e)}>
                    <p>Quiz</p>
                </Link>
            </Navigation>
        </Container>
    )
}

export default Nav;