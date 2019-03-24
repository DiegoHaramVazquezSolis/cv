import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

const SocialStyle = styled.div`
    margin: 0 auto;
    display: block;
`;

const SocialUl = styled.ul`
    list-style-type: none;
    margin: 0;
    paddong: 0;
`;

const SocialLi = styled.li`
    display: inline;
    margin: 0 1em 0 0;
`;

const SocialAnchor = styled.a`
    color: #212121;
    text-decoration: none;
    font-size: 1.2em;
`;

const SocialIcon = styled.i`
    color: ${props => props.theme.color};
`;

const facebook = {
    color: "#3b5998"
}

const twitter = {
    color: "#38A1F3"
}

const linkedin = {
    color: "#0e76a8"
}

const github = {
    color: "#333"
}

const color = {
    'facebook': facebook,
    'twitter': twitter,
    'github': github,
    'linkedin': linkedin
}

const Social = (props) => (
    <SocialStyle>
        {props.social &&
            <SocialUl>
                {props.social.map((social, index) => (
                    <SocialLi key={'Item-social-'+index}>
                        <SocialAnchor target='_blank' href={social.url}>
                            <ThemeProvider theme={color[social.name]}>
                                <SocialIcon className={'fab fa-'+social.name}></SocialIcon>
                            </ThemeProvider>
                        </SocialAnchor>
                    </SocialLi>
                ))}
            </SocialUl>
        }
    </SocialStyle>
);

export default Social;