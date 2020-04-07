import React from 'react';
import { Horse } from '../components/Horse';
import { makeColor } from '../utils/makeColor';

export const TwoTone = () => {

  const black = makeColor({ fixed: 'dark' });

  const white = makeColor({ fixed: 'light' });

  const blue = makeColor({ scalable: { color: 'secondary' } });

  const green = makeColor({ scalable: { color: 'primary' } });

  return (
    <>
      <Horse
        headFill={white}
        headOutline={blue}
        maneFill={white}
        maneOutline={green}
      />

      <Horse
        headFill={blue}
        headOutline={white}
        maneFill={green}
        maneOutline={white}
      />

      <Horse
        headFill={white}
        headOutline={black}
        maneFill={white}
        maneOutline={black}
      />

      <Horse
        headFill={green}
        headOutline={white}
        maneFill={blue}
        maneOutline={white}
      />

      <Horse
        headFill={white}
        headOutline={green}
        maneFill={white}
        maneOutline={blue}
      />
    </>
  );
};