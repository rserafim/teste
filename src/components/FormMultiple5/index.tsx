import React, {useCallback, useState, useEffect} from 'react';

import RandomColors from '../RandomColors'

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
    const [colorA, setColorA] = useState<string>('');
    const [colorB, setColorB] = useState<string>('');
    const [colorC, setColorC] = useState<string>('');
    const [colorD, setColorD] = useState<string>('');
    const [colorE, setColorE] = useState<string>('');
    const [confirmButton, setConfirmButton] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState<string>('');

    useEffect(()=>{
        setSelectedAnswer('')
      },[question])

    useEffect(()=>{
        const colorA = RandomColors()
        const colorB = RandomColors()
        const colorC = RandomColors()
        const colorD = RandomColors()
        const colorE = RandomColors()

        setColorA(colorA)
        setColorB(colorB)
        setColorC(colorC)
        setColorD(colorD)
        setColorE(colorE)
    },[])

    const handleAnswer = useCallback(e=>{
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
        <Alternatives>
           {
               question.image_a_url && question.answer_a ? (
                <button value={question.answer_a}
                onClick={(e)=>handleAnswer(e)}
                style={ selectedAnswer === question.answer_a || selectedAnswer === '' ? {backgroundImage: `url(${question.image_a_url})`, 
                    backgroundRepeat: 'no-repeat',  backgroundSize: '100% 100%'} : 
                    {backgroundImage: `url(${question.image_a_url})`, 
                    backgroundRepeat: 'no-repeat',  backgroundSize: '100% 100%', opacity: 0.3 }}
                />
               ) : question.answer_a ? 
               (
                <button value={question.answer_a}
                onClick={(e)=>handleAnswer(e)}
                style={ selectedAnswer === question.answer_a || selectedAnswer === '' ? {background: colorA} : {background: colorA, opacity: 0.3 }}
                >
                    {question.answer_a}
                </button>
               ) : null
           }
            {
               question.image_b_url && question.answer_b ? (
                <button value={question.answer_b}
                onClick={(e)=>handleAnswer(e)}
                style={ selectedAnswer === question.answer_b || selectedAnswer === '' ? {backgroundImage: `url(${question.image_b_url})`, 
                    backgroundRepeat: 'no-repeat',  backgroundSize: '100% 100%'} : 
                    {backgroundImage: `url(${question.image_b_url})`, 
                    backgroundRepeat: 'no-repeat',  backgroundSize: '100% 100%', opacity: 0.3 }}
                />
               ) : question.answer_b ? 
               (
                <button value={question.answer_b}
                onClick={(e)=>handleAnswer(e)}
                style={ selectedAnswer === question.answer_b || selectedAnswer === '' ? {background: colorB} : {background: colorB, opacity: 0.3 }}
                >
                     {question.answer_b}
                </button>
               ) : null
           }
           {
               question.image_c_url && question.answer_c ? (
                <button value={question.answer_c}
                onClick={(e)=>handleAnswer(e)}
                style={ selectedAnswer === question.answer_c || selectedAnswer === '' ? {backgroundImage: `url(${question.image_c_url})`, 
                    backgroundRepeat: 'no-repeat',  backgroundSize: '100% 100%'} : 
                    {backgroundImage: `url(${question.image_c_url})`, 
                    backgroundRepeat: 'no-repeat',  backgroundSize: '100% 100%', opacity: 0.3 }}
                />
               ) : question.answer_c ? 
               (
                <button value={question.answer_c}
                onClick={(e)=>handleAnswer(e)}
                style={ selectedAnswer === question.answer_c || selectedAnswer === '' ? {background: colorC} : {background: colorC, opacity: 0.3 }}
                >
                     {question.answer_c}
                </button>
               ) : null
           }
           {
               question.image_d_url && question.answer_d ? (
                <button value={question.answer_d}
                onClick={(e)=>handleAnswer(e)}
                style={ selectedAnswer === question.answer_d || selectedAnswer === '' ? {backgroundImage: `url(${question.image_d_url})`, 
                    backgroundRepeat: 'no-repeat',  backgroundSize: '100% 100%'} : 
                    {backgroundImage: `url(${question.image_d_url})`, 
                    backgroundRepeat: 'no-repeat',  backgroundSize: '100% 100%', opacity: 0.3 }}
                />
               ) : question.answer_d ? 
               (
                <button value={question.answer_d}
                onClick={(e)=>handleAnswer(e)}
                style={ selectedAnswer === question.answer_d || selectedAnswer === '' ? {background: colorD} : {background: colorD, opacity: 0.3 }}
                >
                     {question.answer_d}
                </button>
               ) : null
           }
           {
               question.image_e_url && question.answer_e ? (
                <button value={question.answer_e}
                onClick={(e)=>handleAnswer(e)}
                style={ selectedAnswer === question.answer_e || selectedAnswer === '' ? {backgroundImage: `url(${question.image_e_url})`, 
                    backgroundRepeat: 'no-repeat',  backgroundSize: '100% 100%'} : 
                    {backgroundImage: `url(${question.image_e_url})`, 
                    backgroundRepeat: 'no-repeat',  backgroundSize: '100% 100%', opacity: 0.3 }}
                />
               ) : question.answer_e ? 
               (
                <button value={question.answer_e}
                onClick={(e)=>handleAnswer(e)}
                style={ selectedAnswer === question.answer_e || selectedAnswer === '' ? {background: colorE} : {background: colorE, opacity: 0.3 }}
                >
                     {question.answer_e}
                </button>
               ) : null
           }
        </Alternatives>
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