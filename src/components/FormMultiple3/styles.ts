import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

export const Header = styled.div`
    height: 20vh;
    min-height: 20vh;
    max-height: 20vh;
    width: 100%;
    background:linear-gradient(90deg, #000000 0%, #DB00FA 100%);

    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;

    color: #fff;

    padding: 10px;

    h1 {
        text-align: center;
        font-size: 18px;
    }
`;

export const Alternatives = styled.div`
    height: 80vh;
    width: 100%;

    display: flex;
    flex: 1;
    align-items: flex-start;
    justify-content: space-around;
    flex-direction: column;

    padding-top: 20px;
    padding-bottom: 20px;

    button {
        height: 21vh;
        width: 90vw;
        border-radius: 10px;
        border: none;
        margin: 0 auto;

        display: flex;
        align-items: center;
        justify-content: center;

        padding: 10px;

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
