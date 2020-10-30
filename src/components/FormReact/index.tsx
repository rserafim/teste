import React, {useCallback, useState, useEffect} from 'react';

import api from '../../services/api';

import {Container, Header, Alternatives, ViewButton, ViewButtonDisable} from './styles';

interface QuestionProps {
    question: {
        id?: string;
        user_id?: string;
        title?: string;
        answer_a?: string | null;
        answer_b?: string| null;
        answer_c?: string| null;
        answer_d?: string| null;
        answer_e?: string| null;
        image_a?: string | null | undefined;
        image_b?: string | null | undefined;
        image_c?: string | null | undefined;
        image_d?: string | null | undefined;
        image_e?: string | null | undefined;
        points?: number;
        sensible?: boolean;
        status?: boolean;
        type_question: string;
        image_a_url?: string | null | undefined;
        image_b_url?: string | null | undefined;
        image_c_url?: string | null | undefined;
        image_d_url?: string | null | undefined;
        image_e_url?: string | null | undefined;
        form_id?: string;
    },
    handleNextQuestion(): void;
}

const Question: React.FC<QuestionProps> = ({question, handleNextQuestion}) => {
    const [confirmButton, setConfirmButton] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState<string>('');

    useEffect(()=>{
        setSelectedAnswer('')
      },[question])

    const handleAnswer = useCallback( e =>{
        setConfirmButton(true)
        setSelectedAnswer(e.target.value)
    },[])

    const handleConfirmAnswer = useCallback(async()=>{
        await api.post('answerswebform', {
            answer: selectedAnswer ,
            question_id: question.id,
            form_id: question.form_id,
            date: new Date(),
        })

        handleNextQuestion()
    },[question.id, selectedAnswer, handleNextQuestion, question.form_id])

    return (
        <Container>
        <Header>
            <h1>{question.title}</h1>
        </Header>
           {
               question.image_a_url ?
               (
                <Alternatives style={{backgroundImage: `url(${question.image_a_url})`, 
                backgroundRepeat: 'no-repeat',  backgroundSize: '100% 100%'}}>
                 <input type="text" name="name" placeholder="Digite sua resposta aqui" 
                        onChange={e=> handleAnswer(e)} maxLength={60}
                    />
                </Alternatives>
               ):
               (
                <Alternatives>
                    <input type="text" name="name" placeholder="Digite sua resposta aqui" 
                        onChange={e => handleAnswer(e)} maxLength={60}
                    />
                </Alternatives>
               )
           }
        {
            confirmButton ? (
                <ViewButton onClick={handleConfirmAnswer}>
            <p>CONFIRMAR</p>
        </ViewButton>
            ) : (
                <ViewButtonDisable disabled />
            )
        }
        </Container>
    )
}

export default Question;