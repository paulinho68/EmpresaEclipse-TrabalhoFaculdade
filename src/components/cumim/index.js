import React from 'react';

import { Container } from './styles';
import CumimImage from '../../assets/cumim.jpg'
import Card from '../card';

const Cumim = () => {
    return (
        <Container className="animate__animated animate__zoomIn">
            <Card
                title={'Cumim'}
                text={'O profissional tem como sua principal responsabilidade auxiliar os garçons com o atendimento e servindo as refeições e bebidas aos clientes, é necessário que ele obtenha uma relação harmônica junto com o garçom para que possa ter um bom ambiente de trabalho. Organizar as mesas e limpar as mesas, utensílios e o salão, também é uma responsabilidade do cumim. Esse profissional precisa obter paciência, organização e agilidade para que possa lidar com o público corretamente.'}
                image={CumimImage}
            />
        </Container>
    )
}

export default Cumim;