import React, { useState } from 'react';
import Noty from 'noty';
import "../../../node_modules/noty/lib/noty.css";
import "../../../node_modules/noty/lib/themes/mint.css";

import { Container, ButtonAnswer, ButtonNext } from './styles';

import Questions from '../../questions';

const Quiz = () => {
    const questions = Questions;
    const [cont, setCont] = useState(0);
    const [question, setQuestion] = useState(questions[cont]);
    const [answer, setAnswer] = useState('z');
    const [ultimaQuest, setUltimaQuest] = useState(false);


    const choiceAnswer = (e) => {
        const elements = document.getElementsByClassName('buttons');
        for (let item of elements) {
            item.style.border = 'none'
        }
        e.currentTarget.style.border = '1px solid #25282E';
        setAnswer(e.currentTarget.getAttribute('data-target'));
    }

    const next = () => {
        if (answer === 'z') {
            alert('Você precisa selecionar uma das opções para prosseguir.');
        } else {
            if (question.respostaCorreta === answer) {
                new Noty({
                    type: 'success',
                    layout: 'topRight',
                    text: 'Parabéns, continue assim.',
                    timeout: 4000
                }).show();

                const i = cont + 1;
                setQuestion(questions[i]);
                setCont(i);

                if (!!questions[i]) {
                    const elements = document.getElementsByClassName('buttons');
                    for (let item of elements) {
                        item.style.border = 'none'
                    }
                } else {
                    setUltimaQuest(true);
                }
            } else {
                new Noty({
                    type: 'error',
                    layout: 'topRight',
                    text: 'Resposta errada, tente outra alternativa',
                    timeout: 4000
                }).show();
            }
        }
    }

    return (
        <Container className="animate__animated animate__zoomIn">
            {!ultimaQuest ? (
                <>
                    <h1>{questions[0].titulo}</h1>
                    {question.alternativas.map(alternativa => (
                        <ButtonAnswer className="buttons" data-target={alternativa.letra} key={alternativa.letra} onClick={(e) => choiceAnswer(e)}>{alternativa.resposta}</ButtonAnswer>
                    ))}
                    <ButtonNext onClick={() => next()}>
                        Próximo
                    </ButtonNext>
                </>
            ) : (
                    <h1>Parabéns, você concluiu todo o Quiz!!!</h1>
                )}
        </Container>
    )
}

export default Quiz;