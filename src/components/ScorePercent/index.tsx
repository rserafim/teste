import React, {useCallback, useState, useEffect} from 'react';
import Slider from 'rc-slider';
import '../../../node_modules/rc-slider/assets/index.css';

import ModalAnswerSent from '../ModalAnswerSent';
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
    }
}

const Question: React.FC<QuestionProps> = (question) => {
    const [colorA, setColorA] = useState<string>('');
    const [colorB, setColorB] = useState<string>('');
    const [confirmButton, setConfirmButton] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState<number>(0);
    const [openModal, setOpenModal] = useState(false);

    useEffect(()=>{
        const colorA = RandomColors()
        const colorB = RandomColors()

        setColorA(colorA)
        setColorB(colorB)
    },[])

    const handleSlider = useCallback(value=>{
        setConfirmButton(true)
        setSelectedAnswer(value)
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
                <div className="view" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
                    <h1 style={{
                        WebkitTextStrokeWidth : 2,
                        WebkitTextStrokeColor: '#fff'
                    }}>{selectedAnswer}</h1>
                       <h2  style={{
                        WebkitTextStrokeWidth : 0.8,
                        WebkitTextStrokeColor: '#fff'
                    }}>%</h2>
                </div>
                <div style={{backgroundColor: 'rgba(0,0,0,0.8)', width: '100%', height: 45, display: 'flex', alignItems: "center"}}>
                <Slider
                        min = {0}
                        max = {100}
                        step = {5}
                        style={{width: 300}}
                        onChange={handleSlider}
                        minimumTrackStyle={{backgroundColor: '#D700F6', height: 10}}
                        maximumTrackStyle={{backgroundColor:'#aaa', height: 10}}
                        handleStyle={{backgroundColor: '#D700F6', borderColor: '#D700F6', width: 30, height: 30, marginTop: -10}}
                    />
                </div>
                </Alternatives>
               ):
               (
                <Alternatives>
                <div className="view" style={{backgroundColor: colorA}}>
                    <h1>{selectedAnswer}</h1>
                    <h2>%</h2>
                </div>
                    <Slider
                         min = {0}
                         max = {100}
                         step = {5}
                        style={{width: 300}}
                        onChange={handleSlider}
                        minimumTrackStyle={{backgroundColor: colorA, height: 10}}
                        maximumTrackStyle={{backgroundColor:colorB, height: 10}}
                        handleStyle={{backgroundColor: colorA, borderColor: colorA, width: 30, height: 30, marginTop: -10}}
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