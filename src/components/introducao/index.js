import React from 'react';

import { Container } from './styles';

const Introducao = () => {
    return (
        <Container className="animate__animated animate__zoomIn">
            <h1>Introdução</h1>
            <p>
                Nesse módulo será abordado tema cargos. Falaremos
                sobre a responsabilidade e a importância de cada um
                das funções para que todos possam concluir suas
                tarefas com êxito e assim alcançar suas metas e
                objetivos juntamente com a empresa.
                Lembrando que todos os cargos possuem sua
                importância um papel fundamental para o
                crescimento e desenvolvimento da mesma.
            </p>
            <h4>OBJETIVO DO MÓDULO</h4>
            <p>
                Capacitar os colaboradores para que possam
                compreender todas as funções e assim contribuir
                dando um suporte adequado quando solicitado.
            </p>
        </Container>
    )
}

export default Introducao;