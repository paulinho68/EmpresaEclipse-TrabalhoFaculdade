import React from 'react';

import { Container } from './styles';
import BartenderImage from '../../assets/bartender.jpg'
import Card from '../card';

const Bartender = () => {
    return (
        <Container className="animate__animated animate__zoomIn">
            <Card
                title={'Bartender'}
                text={'O profissional é o responsável pelo preparo de bebidas, coquetéis e drinks para os convidados ou clientes do restaurante. Para a elaboração das bebidas é necessário que este profissional tenha em mente método de decoração e saiba como servir cada bebida corretamente, tendo o conhecimento de sua origem, composição e a ação de cada uma dessas bebidas. É necessário que o bartender tenha habilidades para atrair e cativar seus clientes, podendo usar pequenos truques, malabarismo, entre outras coisas. Por o bar ser um local muito visível, é super importante que o profissional mantenha a limpeza e a organização para concluir seu trabalho com êxito.'}
                image={BartenderImage}
            />
        </Container>
    )
}

export default Bartender;