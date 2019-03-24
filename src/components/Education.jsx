import React from 'react';
import H3styled from '../styled/H3Styled';
import Pstyled from '../styled/PStyled';
import H2styled from '../styled/H2styled';

const Education = props => (
    <div className='Education'>
        <div className='Education-container'>
        <H2styled title='Educacion' />
            {props.data.map((edu, index) => (
                <div className='Education-item' key={'Edu-'+index}>
                    <H3styled>
                        {edu.degree} {edu.institution}
                        <span>{edu.startDate}-{edu.endDate}</span>
                    </H3styled>
                    <Pstyled>
                        {edu.description}
                    </Pstyled>
                </div>
            ))}
            <div className='Education-item'>
                <h3>CETI Rio Santiago</h3>
                <p>Jugue bastante futbol</p>
            </div>
            <div className='Education-item'>
                <h3>ITESO</h3>
                <p>
                    Cursando actualmete primer semestre
                    en ingenieria en sistemas computacionales
                    (esta jodidisimo)
                </p>
            </div>
        </div>
    </div>
);

export default Education;