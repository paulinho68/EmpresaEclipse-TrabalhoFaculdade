import React from 'react';

import { Container } from './styles';
import Card from '../card';

const Uniforme = () => {

    return (
        <Container className="animate__animated animate__zoomIn">
            <Card
                title={'Uniforme'}
                text={'Os uniforme são essenciais e importantes para identificar a identidade do restaurante, além de trazer uma padronização e organização de acordo com os cargos. É necessário que todos os uniformes estejam em perfeito estado (limpos, passados e completos), juntamente a isso é de extrema importância que o funcionário esteja sempre bem apresentado desde os cabelos bem arrumados e presos até as unhas limpas. A seguir vamos conferir o uniforme ideal para cada um dos cargos:'}
                topicos={(
                    <div style={{ padding: '10px 10px', textAlign: 'justify', lineHeight: '1.5em' }}>
                        <ul>
                            <li>
                                <b>Coordenador de alimentos e bebidas:</b> Crachá de identificação, roupa e sapato social na cor preta, ter disponível sempre uma touca descartável e utilizar a mesma quando for ter contato com os alimentos e bebidas.
                            </li>
                            <li>
                                <b>Chefe de Fila:</b> Crachá de identificação, roupa e sapato social na cor preta (em caso de mulheres é necessário salto alto na cor preta).
                            </li>
                            <li>
                                <b>Bartender:</b> Crachá de identificação, blusa branca, calça xadrez preta, avental com bolsos e sapato preto.
                            </li>
                            <li>
                                <b>Garçom:</b> Crachá de identificação, roupa social juntamente com um colete, gravata borboleta, avental saia com bolsos e sapato social na cor preta.
                            </li>
                            <li>
                                <b>Cumim:</b> Crachá de identificação, blusa branca, calça xadrez preta, avental com bolsos e sapato preto.
                            </li>
                            <li>
                                <b>Chefe de Cozinha:</b> Xapô, dólmã, avental saia, calça chef e sapato gourmet. É necessário que utilize uma touca descartável por baixo do xapô.
                            </li>
                            <li>
                                <b>Auxiliar de cozinha:</b> Blusa branca, calça chef, avental, sapato gourmet e touca descartáveis.
                            </li>
                        </ul>
                    </div>
                )}
            />
        </Container>
    )
}

export default Uniforme;