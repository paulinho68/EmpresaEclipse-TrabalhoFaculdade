import React from 'react';

import { Container } from './styles';
import ChefeDeCozinhaImage from '../../assets/chefeDeCozinha.jpg'
import Card from '../card';

const ChefeDeCozinha = () => {
    return (
        <Container className="animate__animated animate__zoomIn">
            <Card
                title={'Chefe de Cozinha'}
                text={'O chefe de cozinha é o responsável por gerenciar toda a cozinha, ou seja, é ele quem elabora o cardápio, faz a criação os pratos, certifica que a montagem do prato está feita corretamente, coordena a equipe da cozinha, além de supervisionar a quantidade de produtos utilizados e a limpeza do local.'}
                image={ChefeDeCozinhaImage}
            />
        </Container>
    )
}

export default ChefeDeCozinha;