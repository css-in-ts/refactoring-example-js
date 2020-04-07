import { mix } from 'polished';
import { colorConfig } from '@css-in-ts/design-system/configs';

/**
 * handy dandy JSDoc
 * @param scaler {number}
 * @param color {string}
 * @return {string}
 */
const createColor = (
  scaler,
  color
) =>
  mix(scaler, colorConfig.fixed.light, colorConfig.scalable[color]);

/**
 * handier dandier JSDoc
 * @param hex {string}
 * @return {[string, string, string, string]}
 */
const createColorScale = (hex) => [
  colorConfig.scalable[hex],
  createColor(0.25, hex),
  createColor(0.5, hex),
  createColor(0.75, hex)
];

/**
 * lovely
 * @type {{secondary: string[], gray: string[], light: string[], success: string[], warning: string[], error: string[], accent: string[], primary: string[]}}
 */
const scalableColorMap = {
  primary: createColorScale('primary'),
  secondary: createColorScale('secondary'),
  accent: createColorScale('accent'),
  gray: createColorScale('gray'),
  light: createColorScale('light'),
  success: createColorScale('success'),
  warning: createColorScale('warning'),
  error: createColorScale('error')
};

/**
 * lovely
 * @type {{light: string, dark: string}}
 */
const fixedColorMap = {
  light: colorConfig.fixed.light,
  dark: colorConfig.fixed.dark
};

/**
 * a happy little document
 * @param type {string}
 * @param color {string}
 * @param [scale] {string}
 * @return {string}
 */
export const makeColor = ({
  type,
  color,
  scale
}) => {
  switch (type) {
    case 'custom':
      console.warn(
        "You're attempting to use a custom color that falls outside of the design system. This color will not be regulated by the design system any longer and thusly isn't type-safe. You'll be required to update this value manually for any subsequent changes. Use with cation."
      );
      console.log(color);
      return color;
    case 'fixed':
      return fixedColorMap[color]
    case 'scalable':
      return scalableColorMap[color][scale || 0];
    default:
      return ''
  }
};