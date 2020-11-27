import React from 'react';

import { Container } from './styles';
import GarcomImage from '../../assets/garcom.jpg'
import Card from '../card';

const Garcom = () => {
    return (
        <Container className="animate__animated animate__zoomIn">
            <Card
                title={'Garçom'}
                text={'Sua função tem como responsabilidade o atendimento as mesas dos clientes, desde o momento em que se anota o pedido até a retirada dos pratos, e em alguns casos o pagamento. O garçom é responsável pela limpeza e organização das mesas, utensílios e do salão. Esse profissional precisa manter uma boa relação com o cliente para que possa obter sucesso em seu atendimento e assim satisfazer o cliente. O garçom conta com o auxílio do cumim para atender os clientes, manter uma sincronia é fundamental para obter o sucesso do início até o fim do atendimento.'}
                image={GarcomImage}
            />
        </Container>
    )
}

export default Garcom;