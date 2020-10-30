import React, {useCallback, useState, useEffect} from 'react';

import Logo from '../../assets/images/form1.png';
import Cover from '../../assets/images/form2.png';

import Form from '../Form/index';

import api from '../../services/api';

import {Container, Header, Alternatives} from './styles';

interface QuestionProps {
    question: {
        id: string;
        title: string;
        answer_a?: string | null | undefined;
        answer_b?: string | null | undefined;
        image_a_url?: string | null | undefined;
        image_b_url?: string | null | undefined;
    }
}

interface QuestionsProps {
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

const Question: React.FC<QuestionProps> = (question) => {
    const [openForm, setOpenForm] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState<number>(0);
    const [questions, setQuestions] = useState<QuestionsProps[]>();


    useEffect(()=>{
        async function getData(){
            const {data} = await api.get(`questionswebform/form/${question.question.id}`)
            
            setQuestions(data)
        }

        getData()

    },[question.question.id])

    const handleForm = useCallback(value=>{
        console.log(selectedAnswer)
        setOpenForm(true)
        setSelectedAnswer(value)
    },[selectedAnswer])

    return (
        <Container>
        <Header>
            <h1>{question.question.title}</h1>
        </Header>
        {
            openForm && questions ? <Form questions={questions} /> : null
        }
        {
            questions && 
         (
            <Alternatives >
            <p>{question.question.answer_a}</p>
            <img className="cover" src={Cover} alt="cover_image"/>
            <img className="logo" src={Logo} alt="logo_image"/>
            <button onClick={handleForm}>Responder</button>
           </Alternatives>
         )
        }
        </Container>
    )
}

export default Question;