import React from 'react';
import { Horse } from '../components/Horse';
import { makeColor } from '../utils/makeColor';

export const Filled = () => {

  const black = makeColor({ fixed: 'dark' });

  const white = makeColor({ fixed: 'light' });

  const blue = makeColor({ scalable: { color: 'secondary' } });
  const lightBlue = makeColor({ scalable: { color: 'secondary', scale: 3 } });

  const green = makeColor({ scalable: { color: 'primary' } });
  const lightGreen = makeColor({ scalable: { color: 'primary', scale: 3 } });

  return (
    <>
      <Horse
        headFill={green}
        headOutline={lightGreen}
        maneFill={blue}
        maneOutline={lightBlue}
      />

      <Horse
        headFill={lightGreen}
        headOutline={green}
        maneFill={lightBlue}
        maneOutline={blue}
      />

      <Horse
        headFill={black}
        headOutline={white}
        maneFill={black}
        maneOutline={white}
      />

      <Horse
        headFill={lightBlue}
        headOutline={blue}
        maneFill={lightGreen}
        maneOutline={green}
      />

      <Horse
        headFill={blue}
        headOutline={lightBlue}
        maneFill={green}
        maneOutline={lightGreen}
      />
    </>
  );
};