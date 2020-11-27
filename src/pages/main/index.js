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

    const routeFunction = (name) => {

        switch (name) {
            case 'introducao':
                setRoutes(<Introducao />);
                break;
            case 'coordenador':
                setRoutes(<Coordenador />);
                break;
            case 'chefeDeFila':
                setRoutes(<ChefeDeFila />);
                break;
            case 'bartender':
                setRoutes(<Bartender />);
                break;
            case 'garcom':
                setRoutes(<Garcom />);
                break;
            case 'cumim':
                setRoutes(<Cumim />);
                break;
            case 'chefeDeCozinha':
                setRoutes(<ChefeDeCozinha />);
                break;
            case 'auxiliarDeCozinha':
                setRoutes(<AuxiliarDeCozinha />);
                break;
            case 'uniforme':
                setRoutes(<Uniforme />);
                break;
            case 'crachas':
                setRoutes(<Crachas />);
                break;
            // case 'Quiz':
            //     setRoutes(<Quiz />);
            //     break;
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