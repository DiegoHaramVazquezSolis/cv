import React from 'react';
import styled from 'styled-components';
import Social from './Social';
import Icon from './../img/icon.png';

const AboutStyle = styled.div`
    text-align: center;
`;

const AboutAvatarStyle = styled.div`
    padding: 2em 0 0 0;
`;

const AboutImg = styled.img`
    border-radius: 100%;
    width: 160px;
    height: 160px;
    border: 2px solid #85d9ef;
    margin: 0 auto;
    display: block;
    box-shadow: 0 0 10px rgba(0, 0, 0, .6);
`;

const AboutName = styled.h1`
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    letter-spacing: 1.2px;
    margin: 0.5em 0px 0px;
    color: #53d2fa;
`;

const AboutProfession = styled.p`
    margin: 0.2em 0px 1em;
    letter-spacing: 1.6px;
    font-weight: 300;
    color: #3c4656;
`;

const AboutDescription = styled.p`
    color: rgb(117, 117, 117);
    font-size: 1em;
    font-weight: 300;
`;

const AboutLocation = styled.p`
    font-size: 1em;
    font-weight: 400;
    color: rgb(117, 117, 117);
`;

const About = ({ bio, social }) => (
    <AboutStyle>
        <AboutAvatarStyle>
            <AboutImg src={Icon} alt="Diego Foto"/>
        </AboutAvatarStyle>
        <AboutName>Diego Haram Vazquez Solis</AboutName>
        <AboutProfession>Full stack developer - Wide Reciever</AboutProfession>
        <AboutDescription>
            Named world's greatest sex machine 2019
        </AboutDescription>
        <AboutLocation>Guadalajara, Jalisco</AboutLocation>
        <Social social={social} />
    </AboutStyle>
);

export default About;