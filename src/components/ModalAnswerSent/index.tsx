import React, {useEffect} from 'react';
import {Animated} from "react-animated-css";

import mobile from '../../assets/images/mobile.png';
import appstore from '../../assets/images/appstore.png';
import playstore from '../../assets/images/googleplay.png';

import {Container, Header, Body} from './styles';


const ModalAnswerSent: React.FC = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])

    return (
        <Container>
            <Animated animationIn="fadeInUp" animationOut="fadeOutLeft" animationInDuration={1000} isVisible={true}>
            <Header>
                <p className="title">Resposta, enviada!</p>
                <p className="subTitle">Sabia que suas respostas e opinião poderiam valer pontos para você?</p>
            </Header>
            <Body>
                <p className="main">Participe você também</p>
                <div className="sub" />
                <p className="submain">RESPONDA, JUNTE PONTOS E TROQUE POR PRODUTOS E PRÊMIOS</p>

                <Animated animationIn="fadeInDown" animationOut="fadeOutLeft" animationInDuration={1500} isVisible={true}>
                <img src={mobile} alt="mobile_image"/>
                </Animated>  

                <div className="description">
                    <p className="text1">É MUITO SIMPLES PARTICIPAR</p>
                    <p className="text2">Baixe o aplicativo da simpls no seu celular</p>
                    <p className="text3">A simpls é uma plataforma de perguntas e questionário. Você responde perguntas diversas, acumula pontos e troca por produtos e outros benefícios. Seus dados e sua identidade estão seguros, não solicitamos nome, endereço e outros dados sensíveis.</p>
                </div>
                <div className="stores">
                    <a href="https://play.google.com/store/apps/details?id=com.simplsmobile" target="_blank" rel="noreferrer">
                    <img src={playstore} alt="play_store" />
                    </a>
                    <a href="https://apps.apple.com/br/app/simpls/id1529926318?l=en" target="_blank" rel="noreferrer">
                    <img src={appstore} alt="app_store" />
                    </a>
                </div>
            </Body>
        </Animated>  
        </Container>  
    )
}

export default ModalAnswerSent;

