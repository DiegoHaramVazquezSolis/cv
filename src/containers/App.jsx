import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Main from './../components/Main';
import SideBar from './../components/SideBar';
import Info from './../components/Info';
import About from './../components/About';
import Education from './../components/Education';
import Experience from './../components/Experience';
import Skills from './../components/Skills';
import useGetData from '../hooks/useGetData';

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Lato', sans-serif;
        margin: 0;
        padding: 0;
        background: #f5f5f5;
    }
`;

const App = () => {
    const data = useGetData();
    return data.length === 0 ? <h1>Cargando</h1> : (
        <Main>
            <GlobalStyle />
            <SideBar>
                <About {...data} />
            </SideBar>
            <Info>
                <Education data={data.education} />
                <Experience />
                <Skills data={data.skills} />
            </Info>
        </Main>
    );
}

export default App;