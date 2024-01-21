import { BREAKPOINTS } from 'constants/breakpoints';

const theme = {
  colors: {
    bg: {
      white: '#ffffff',
      gray: '#EFEEFF',
      beige: '#fcfaf9',
      purple: '#837de6',
      green: '#60d17a',
    },
    neutral: {
      white: '#ffffff',
      gray: '#898989',
      blacked: '#2c2f2b',
    },
    progress: {
      default: '#e2e2e2',
      filled: '#48cb71',
      error: '#FF4D00B9',
    },
    border: {
      green: '#60d17a',
    },
    hover: {
      hPurple: '#433ae5',
      hGreen: '#2BD954',
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
