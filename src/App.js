import React from 'react';
import styled from "styled-components";
import {FixedDark} from "./features/fixed/FixedDark";
import {FixedLight} from "./features/fixed/FixedLight";
import {FixedDarkLight} from "./features/fixed/FixedDarkLight";
import {FixedLightDark} from "./features/fixed/FixedLightDark";
import {Divider} from "./components/Divider";
import {makeColor} from "./utils/makeColor";
import {Primary} from "./features/scaled/Primary";
import {Secondary} from "./features/scaled/Secondary";
import {Accent} from "./features/scaled/Accent";
import {Error} from "./features/scaled/Error";
import {Warning} from "./features/scaled/Warning";
import {BlueOrange} from "./features/custom/BlueOrange";
import {EmptyConfig} from "./features/broken/EmptyConfig";
import {OverloadedConfig, OverloadedConfigAgain} from "./features/broken/OverloadedConfig";

const GridWrapper = styled.div`
  display: flex;
  padding: 1rem 0;
  align-items: center;
  justify-content: center;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 12px;
  grid-row-gap: 12px;
`

const Title  = styled.h1`
  text-align: center;
  font-size: 2rem;
`

function App() {
  return (
    <div>
      <Title>Color Swatches</Title>
      <GridWrapper>
        <Grid>

          <Divider content="Fixed" color={makeColor({ fixed: 'dark' })}/>

          <FixedDark />
          <FixedDarkLight />
          <div />
          <FixedLight />
          <FixedLightDark />

          <Divider content="Scaled" color={makeColor({ scalable: { color: 'primary' }})} />

          <Primary />
          <Secondary />
          <Accent  />
          <Error />
          <Warning />

          <Divider content="Custom" color={makeColor({ custom: '#EE0DE9' })} />

          <div />
          <div />
          <BlueOrange />
          <div />
          <div />

          <Divider content="Huh?" color={makeColor({ fixed: 'dark', custom: 'white' })} />

          <EmptyConfig />
          <div />
          <OverloadedConfig />
          <div />
          <OverloadedConfigAgain />

        </Grid>
      </GridWrapper>
    </div>
  );
}

export default App;
