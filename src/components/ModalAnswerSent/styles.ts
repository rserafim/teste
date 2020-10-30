import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 100vw;

  position: absolute;
  z-index: 10;

  background-color: #E5E5E0;

    transition:  1.5s ease-in;
`;

export const Header = styled.div`
    height: 247px;
    background:linear-gradient(90deg, #61A2A2 0%, #37EDA0 100%);

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    padding: 30px;

    p.title {
        font-size: 40px;
        color: #fff;
        font-weight: 700;
        text-align: center;
    }

    p.subTitle {
        font-size: 18px;
        color: #000;
        text-align: center;
        margin-top: 10px;
    }
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px;

    div.sub {
        width: 69px;
        height: 1px;
        border: 1px solid #DB00FA;
        background-color: #DB00FA;
        margin-top: 10px;
        margin-bottom: 20px;
    }

    p.main {
        font-weight: 700;
        font-size: 22px;
        text-align: center;
        color: #000;
    }

    p.submain {
        font-weight: 700;
        font-size: 16px;
        text-align: center;
        color: #000;
    }

    img {
        width: 200px;
        margin-top: 40px;
        z-index: 10;
    }

    div.description {
        width: 100%;
        margin: 0 auto;
        border-radius: 17px;
        background:linear-gradient(#DB00FA 0%, #000000 100%);
        padding: 20px;
        margin-top: -30px;
        padding-top: 40px;

        p.text1{
            color: #FCC103;
            font-weight: 700;
            font-size: 16px;
        }

        p.text2{
            color: #fff;
            font-weight: 600;
            font-size: 28px;

            margin-top: 20px;
            margin-bottom: 20px;
        }

        p.text3{
            color: #fff;
            font-weight: 400;
            font-size: 18px;

            margin-top: 20px;
            margin-bottom: 20px;
        }

    }

        div.stores {
            display: flex;
            flex-direction: row;
            width: 100%;
            justify-content: space-between;
            align-items: space-between;
            margin-top: -10px;

            a {
                img {
                width: 100%;

            }
            }

        }
`;
