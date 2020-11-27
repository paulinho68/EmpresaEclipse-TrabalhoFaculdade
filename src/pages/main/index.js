import React, { useState } from 'react';
import { Container } from './styles';

import Nav from '../../components/nav';
import Introducao from '../../components/introducao';
import Coordenador from '../../components/coordenador';

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