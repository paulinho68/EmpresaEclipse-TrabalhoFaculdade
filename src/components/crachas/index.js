import React from 'react';

import { Container } from './styles';
import CrachasImage from '../../assets/crachas.jpg'
import Card from '../card';

const Crachas = () => {
    return (
        <Container className="animate__animated animate__zoomIn">
            <Card
                title={'Crachás de Identificação'}
                text={'O crachá de identificação é um objeto necessário para o funcionário que circula pelo salão do restaurante e que tenha contato com os clientes, pois é através dele que podemos identificar o nome do funcionário e o seu cargo. A seguir podemos observar o modelo disponível de crachá com a devida identificação.'}
                image={CrachasImage}
            />
        </Container>
    )
}

export default Crachas;