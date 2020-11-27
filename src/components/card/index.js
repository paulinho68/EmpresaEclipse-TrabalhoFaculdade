import React from 'react';

import { Container, Title, Text, Content } from './styles';

const Card = ({ title, text, image, topicos = null }) => {
    return (
        <Container className="animate__animated animate__zoomIn">
            {image ? (
                <img src={image} alt="Imagem" />
            ) : null}
            <Content>
                <Title>
                    {title}
                </Title>
                <Text>
                    {text}
                </Text>
                {topicos ? topicos : null}
            </Content>
        </Container>
    )
}

export default Card;