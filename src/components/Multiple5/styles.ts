import styled from 'styled-components';


export const Header = styled.div`
    height: 20vh;
    min-height: 20vh;
    max-height: 20vh;
    background:linear-gradient(90deg, #000000 0%, #DB00FA 100%);

    display: flex;
    align-items: center;
    justify-content: center;

    color: #fff;

    padding: 15px;

    h1 {
        text-align: center;
        font-size: 18px;
    }
`;

export const Alternatives = styled.div`
    height: 72vh;
    width: 100%;
    background-color: #000;
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    flex-direction: column;

    padding-top: 20px;
    padding-bottom: 20px;

    button {
        height: 100%;
        margin-bottom: 10px;
        width: 90vw;
        border-radius: 10px;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
    }
`;

export const ViewButton = styled.button`
    width: 100vw;
    height: 8vh;
    min-height: 8vh;
    border: 3px solid #37EDA0;
    background-color: #37EDA0;
    color: #000;
    font-weight: bold;
`;


export const ViewButtonDisable = styled.button`
    width: 100vw;
    height: 8vh;
    min-height: 8vh;
    border: 3px solid #eee;
    background-color: #eee;
    font-weight: bold;
`;
