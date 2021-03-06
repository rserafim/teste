import React from 'react';

import { Header, Alternatives, ViewButton } from './styles';

interface QuestionProps {
    question: {
        id?: string;
        user_id?: string;
        title?: string;
        answer_a?: string | null;
        answer_b?: string | null;
        answer_c?: string | null;
        answer_d?: string | null;
        answer_e?: string | null;
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







    return (
        <>
            <Header>
                <h1>{question.question.title}</h1>
            </Header>

            <Alternatives>

            </Alternatives>

            <ViewButton >
                <p>CONFIRMA2</p>
            </ViewButton>
        </>
    )
}

export default Question;