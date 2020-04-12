import React from 'react';
import styled from 'styled-components';
import { makeColor } from './utils/makeColor';
import { Header } from './components/Header';
import { Basic } from './features/Basic';
import { TwoTone } from './features/TwoTone';
import { Filled } from './features/Filled';
import { Broken } from './features/Broken';

const GridWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  background-color: ${makeColor({ scalable: { color: 'light', scale: 2 } })};
  border-color: ${makeColor({ scalable: { color: 'secondary' } })};
  border-style: dotted;
  border-width: 2px;
  border-radius: 2rem;
`;

const HeaderWrapper = styled.div`
  text-align: center;
`;

function App() {
  return (
    <div>
      <HeaderWrapper>
        <Header/>
      </HeaderWrapper>
      <GridWrapper>
        <Grid>

          <Basic/>

          <TwoTone/>

          <Filled/>

          <Broken/>

        </Grid>
      </GridWrapper>
    </div>
  );
}

export default App;
