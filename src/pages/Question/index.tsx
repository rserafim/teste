/* eslint-disable no-restricted-globals */
import React, {useState, useEffect} from 'react';

import Boolean from '../../components/Boolean';
import Multiple3 from '../../components/Multiple3';
import Multiple4 from '../../components/Multiple4';
import Multiple5 from '../../components/Multiple5';
import ScoreInteger from '../../components/ScoreInteger';
import ScorePercent from '../../components/ScorePercent';
import ReactQuestion from '../../components/React';
import Form from '../../components/CoverForm';

import api from '../../services/api';

import {Container} from './styles';

interface Question {
    id: string;
    user_id: string;
    title: string;
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

const Home: React.FC = () => {
    const [questionTarget, setQuestionTarget] = useState<Question>({} as Question)
    var url = new URL(window.location.href);
    var questionId = url.pathname

    useEffect(()=>{
         async function getData(){
             const {data} = await api.get(`questionsweb${questionId}`)
             setQuestionTarget(data)
         }

         getData();
    },[questionId])

    return (
        <Container>
           {
               questionTarget ?
               (
                questionTarget.type_question === 'boolean' ? (
                    <Boolean question={questionTarget}/>
                ) : questionTarget.type_question === 'multiple_3' ? (
                    <Multiple3 question={questionTarget} />
                ) : questionTarget.type_question === 'multiple_4' ? (
                     <Multiple4 question={questionTarget} />
                ) : questionTarget.type_question === 'multiple_5' ? (
                 <Multiple5 question={questionTarget} /> 
                ) : questionTarget.type_question === 'score_integer' ? (
                 <ScoreInteger question={questionTarget} /> 
                ) : questionTarget.type_question === 'score_percentage' ? (
                 <ScorePercent question={questionTarget} />  
                ) :  questionTarget.type_question === 'react' ? (
                 <ReactQuestion question={questionTarget} />  
                ) :  questionTarget.type_question === 'form' ? (
                     <Form question={questionTarget} />  
                ) : <p>{questionTarget.type_question}</p>
                ) : <p>.</p>
           }
        </Container>
    )
}

export default Home;