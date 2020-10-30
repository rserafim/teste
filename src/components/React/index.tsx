import React, {useCallback, useState} from 'react';

import ModalAnswerSent from '../ModalAnswerSent';

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
    }
}

const Question: React.FC<QuestionProps> = (question) => {
    const [confirmButton, setConfirmButton] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState<string>('');
    const [openModal, setOpenModal] = useState(false);

    const handleAnswer = useCallback(e=>{
        setConfirmButton(true)
        setSelectedAnswer(e.target.value)
    },[])

    const handleConfirmAnswer = useCallback(async()=>{
        await api.post('answersweb', {
            answer: selectedAnswer ,
            question_id: question.question.id,
            date: new Date(),
        })
        setOpenModal(true)
    },[question.question.id, selectedAnswer])

    return (
        <Container>
        <Header>
            <h1>{question.question.title}</h1>
        </Header>
        {
            openModal && (
                <ModalAnswerSent />
            )
        }
           {
               question.question.image_a_url ?
               (
                <Alternatives style={{backgroundImage: `url(${question.question.image_a_url})`, 
                backgroundRepeat: 'no-repeat',  backgroundSize: '100% 100%'}}>
                 <input type="text" name="name" placeholder="Digite sua resposta aqui" 
                        onChange={e=>handleAnswer(e)} maxLength={60}
                    />
                </Alternatives>
               ):
               (
                <Alternatives>
                    <input type="text" name="name" placeholder="Digite sua resposta aqui" 
                        onChange={e=>handleAnswer(e)} maxLength={60}
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