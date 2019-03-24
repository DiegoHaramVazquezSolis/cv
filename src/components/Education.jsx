import React from 'react';
import H3styled from '../styled/H3Styled';
import Pstyled from '../styled/PStyled';
import H2styled from '../styled/H2styled';

const Education = props => (
    <div className='Education'>
        <div className='Education-container'>
        <H2styled title='Educacion' />
            {/*props.data.map((edu, index) => (
                <div className='Education-item' key={'Edu-'+index}>
                    <H3styled>
                        {edu.degree} {edu.institution}
                        <span>{edu.startDate}-{edu.endDate}</span>
                    </H3styled>
                    <Pstyled>
                        {edu.description}
                    </Pstyled>
                </div>
            ))*/}
            <div className='Education-item'>
                <H3styled>CETI Rio Santiago</H3styled>
                <Pstyled>Desarrolle bastante mi futbol</Pstyled>
            </div>
            <div className='Education-item'>
                <H3styled>ITESO</H3styled>
                <Pstyled>
                    Cursando actualmete primer semestre
                    en ingenieria en sistemas computacionales
                    (esta jodidisimo)
                </Pstyled>
            </div>
        </div>
    </div>
);

export default Education;