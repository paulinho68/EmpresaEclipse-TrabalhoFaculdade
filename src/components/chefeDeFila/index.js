import React from 'react';

import { Container } from './styles';
import Hostess from '../../assets/Hostess.jpg'
import Card from '../card';

const ChefeDeFila = () => {
    return (
        <Container className="animate__animated animate__zoomIn">
            <Card
                title={'Chefe de Fila'}
                text={'Sua função tem como responsabilidade coordenar as boas práticas no departamento de alimentos e bebidas, participar na elaboração dos cardápios juntamente com o chefe de cozinha, acompanha os resultados obtidos e fazer as devidas alterações quando necessário, definir o orçamento da área e controlar os produtos no depósito.'}
                image={Hostess}
            />
        </Container>
    )
}

export default ChefeDeFila;