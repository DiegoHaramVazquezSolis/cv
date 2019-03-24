import React from 'react';
import H3styled from '../styled/H3Styled';
import Pstyled from '../styled/PStyled';
import H2styled from '../styled/H2styled';

const Experience = () => (
    <div className='Experience'>
        <H2styled title="Experiencia" />
        <div className='Experience-container'>
            <H3styled>Sanherti</H3styled>
            <Pstyled>Becario en Sanherti 3 meses</Pstyled>
            <H3styled>Programador de CNC en rectificados de torno Romero</H3styled>
            <Pstyled>
                1 año utilizando Mach 3 y creando un sistema propio de CNC
            </Pstyled>
            <H3styled>Programador Backend en Qapla</H3styled>
            <Pstyled>
                Programando del lado del servidor para Qapla Gamin
            </Pstyled>
        </div>
    </div>
);

export default Experience;