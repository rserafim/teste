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
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
    position: relative;

    img.cover {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
        width: 100%;
        height: 100%;
    }

    img.logo {
        position: absolute;
        left: 25%;
        margin: 0 auto;
        width: 50%;
    }

    p {
        position: absolute;
        top: 15%;
        color: #000;
        font-weight: bold;
        font-size: 18px;

        width: 80%;
        text-align: center;
    }

    button {
        position: absolute;
        bottom: 15%;
        color: #000;
        font-weight: bold;
        font-size: 18px;

        border: none;
        background-color: #37EDA0;
        padding: 10px;
        border-radius: 15px;
        height: 51px;

        width: 80%;
        text-align: center;
    }
`;

