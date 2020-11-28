import React, { useState } from 'react';
import { Container } from './styles';

import Nav from '../../components/nav';
import Introducao from '../../components/introducao';
import Coordenador from '../../components/coordenador';
import ChefeDeFila from '../../components/chefeDeFila';
import Bartender from '../../components/bartender';
import Garcom from '../../components/garcom';
import Cumim from '../../components/cumim';
import ChefeDeCozinha from '../../components/chefeDeCozinha';
import AuxiliarDeCozinha from '../../components/auxiliarDeCozinha';
import Uniforme from '../../components/uniforme';
import Crachas from '../../components/crachas';

const Main = () => {
    const [route, setRoutes] = useState(<Introducao />);

    const routeFunction = (name = 'introducao') => {
        if (name === 'introducao') {
            setRoutes(<Introducao />);
        } else if (name === 'coordenador') {
            setRoutes(<Coordenador />);
        } else if (name === 'chefeDeFila') {
            setRoutes(<ChefeDeFila />);
        } else if (name === 'bartender') {
            setRoutes(<Bartender />);
        } else if (name === 'garcom') {
            setRoutes(<Garcom />);
        } else if (name === 'cumim') {
            setRoutes(<Cumim />);
        } else if (name === 'chefeDeCozinha') {
            setRoutes(<ChefeDeCozinha />);
        } else if (name === 'auxiliarDeCozinha') {
            setRoutes(<AuxiliarDeCozinha />);
        } else if (name === 'uniforme') {
            setRoutes(<Uniforme />);
        } else if (name === 'crachas') {
            setRoutes(<Crachas />);
        } else {
            setRoutes(<Introducao />);
        }
    }

    return (
        <Container>
            <Nav routeFunction={routeFunction} />
            {route}
        </Container>
    );
}

export default Main;