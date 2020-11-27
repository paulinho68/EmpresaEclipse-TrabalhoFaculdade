import React from 'react';

import { Container } from './styles';
import AuxiliarImage from '../../assets/auxiliar.jpg'
import Card from '../card';

const AuxiliarDeCozinha = () => {
    return (
        <Container className="animate__animated animate__zoomIn">
            <Card
                title={'Auxiliar de Cozinha'}
                text={'Ele é o profissional encarregado por dá um suporte ao chefe de cozinha, sendo assim, ele pode executar algumas etapas dos pratos, fazer a verificação da data de validade dos produtos, a mise em place (organização dos produtos para a preparação dos pratos), fazer a limpeza da cozinha e dos utensílios. É necessário ser uma pessoa disciplinada e organizada para que possa executar seu trabalho com êxito, juntamente com toda a equipe presente na cozinha.'}
                image={AuxiliarImage}
            />
        </Container>
    )
}

export default AuxiliarDeCozinha;