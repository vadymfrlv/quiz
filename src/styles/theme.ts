import { BREAKPOINTS } from 'constants/breakpoints';

const theme = {
  colors: {
    bg: {
      white: '#ffffff',
      beige: '#fcfaf9',
      purple: '#837de6',
      green: '#60d17a',
    },
    neutral: {
      blacked: '#2c2f2b',
      gray: '#898989',
    },
    progress: {
      default: '#e2e2e2',
      filled: '#48cb71',
    },
  },
  fontWeights: {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
  screens: {
    mob: BREAKPOINTS.MOB,
    tab: BREAKPOINTS.TAB,
    note: BREAKPOINTS.NOTE,
    desk: BREAKPOINTS.DESK,
  },
};

export default theme;
