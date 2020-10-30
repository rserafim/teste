import React, {useCallback, useEffect, useState} from 'react';

import ModalAnswerSent from '../ModalAnswerSent';
import Boolean from '../FormBoolean';
import Multiple3 from '../FormMultiple3';
import Multiple4 from '../FormMultiple4';
import Multiple5 from '../FormMultiple5';
import ScoreInteger from '../FormScoreInteger';
import ScorePercent from '../FormScorePercent';
import ReactQuestion from '../FormReact';

import {Container, ViewCounter} from './styles';

interface QuestionProps {
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

interface ModalProps {
    questions: QuestionProps[]
}

const Question: React.FC<ModalProps> = ({questions}) => {
    const [questionTarget, setQuestionTarget] = useState<QuestionProps>({} as QuestionProps)
    const [maximumQuestions, setMaximumQuestions] = useState<number>();
    const [counter, setCounter] = useState(1);
    const [position, setPosition] = useState(0);
    const [openModal, setOpenModal] = useState(false);

    useEffect(()=>{
        setQuestionTarget(questions[position])
        setMaximumQuestions(questions.length);
    },[questions, position])

    const handleNextQuestion = useCallback(()=>{
        if( maximumQuestions && maximumQuestions === counter ) {
            setOpenModal(true)
        } 

        setPosition(position => position + 1)

        setCounter(counter => counter + 1)
        setQuestionTarget(questions[position + 1])
    },[counter, questions, maximumQuestions, position])

    return (
        <Container>
            <ViewCounter>
                <p>Pergunta: {counter}/{maximumQuestions}</p>
            </ViewCounter>
            {
            openModal && (
                <ModalAnswerSent />
            )
            }
            {
              position === maximumQuestions ? (
                <ModalAnswerSent />
              ) :
              (
                questionTarget.type_question === 'boolean' ? (
                    <Boolean question={questionTarget} handleNextQuestion={handleNextQuestion}/>
                ) : questionTarget.type_question === 'multiple_3' ? (
                    <Multiple3 question={questionTarget}  handleNextQuestion={handleNextQuestion} />
                ) : questionTarget.type_question === 'multiple_4' ? (
                     <Multiple4 question={questionTarget}  handleNextQuestion={handleNextQuestion} />
                ) : questionTarget.type_question === 'multiple_5' ? (
                 <Multiple5 question={questionTarget}  handleNextQuestion={handleNextQuestion} /> 
                ) : questionTarget.type_question === 'score_integer' ? (
                 <ScoreInteger question={questionTarget}  handleNextQuestion={handleNextQuestion} /> 
                ) : questionTarget.type_question === 'score_percentage' ? (
                 <ScorePercent question={questionTarget}   handleNextQuestion={handleNextQuestion} />  
                ) :  questionTarget.type_question === 'react' ? (
                 <ReactQuestion question={questionTarget}  handleNextQuestion={handleNextQuestion} />  
                ) : <ModalAnswerSent />
              )
           }
        </Container>
    )
}

export default Question;