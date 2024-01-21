import styled from 'styled-components';

import { pulse1, pulse2 } from 'styles/animation';
import Arrow from 'assets/images/svg/arrow.svg';

interface QuizCardProps {
  $isMale?: boolean;
  $isColumn?: boolean;
  $isBtn?: boolean;
}

export const QuizCardStyled = styled.li<QuizCardProps>`
  display: flex;
  flex-direction: ${p => (p.$isColumn ? 'row-reverse' : 'column')};
  align-items: ${p => (p.$isColumn ? 'center' : 'normal')};
  justify-content: ${p => (p.$isColumn ? 'space-between' : 'normal')};
  height: ${p => (p.$isBtn ? '300px' : p.$isColumn ? '90px' : '180px')};
  padding: ${p => (p.$isColumn ? '10px 10px 10px 20px' : '10px')};

  border-radius: ${p => (p.$isColumn ? '25px' : '30px')};
  background-color: ${p => p.theme.colors.bg.white};
  cursor: ${p => (p.$isBtn ? 'default' : 'pointer')};

  @media (min-width: ${p => p.theme.screens.tab}) {
    height: ${p => (p.$isBtn ? '350px' : p.$isColumn ? '110px' : '420px')};
    padding: ${p => (p.$isColumn ? '10px 10px 10px 30px' : '15px')};
    border-radius: ${p => (p.$isColumn ? '30px' : '40px')};
  }

  @media (min-width: ${p => p.theme.screens.note}) {
    height: ${p => (p.$isBtn ? '450px' : p.$isColumn ? '110px' : '400px')};
  }

  @media (min-width: ${p => p.theme.screens.desk}) {
    height: ${p => (p.$isBtn ? '500px' : p.$isColumn ? '110px' : '400px')};
  }

  @media (pointer: fine) {
    &:hover {
      outline: ${p => (p.$isBtn ? 'none' : `3px dashed ${p.theme.colors.neutral.gray}`)};
    }
  }
`;

export const Image = styled.img<QuizCardProps>`
  width: ${p => (p.$isColumn ? '70px' : '100%')};
  height: 100%;
  object-fit: cover;
  border-radius: ${p => (p.$isColumn ? '15px' : '20px')};

  @media (min-width: ${p => p.theme.screens.tab}) {
    width: ${p => (p.$isColumn ? '80px' : '100%')};
    border-radius: ${p => (p.$isColumn ? '20px' : '25px')};
  }
`;

export const OptionDescr = styled.p<QuizCardProps>`
  margin-top: ${p => (p.$isColumn ? '0' : '10px')};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => (p.$isColumn ? '16px' : '14px')};
  text-align: center;

  @media (min-width: ${p => p.theme.screens.tab}) {
    margin-top: ${p => (p.$isColumn ? '0' : '15px')};
    font-size: 25px;
  }

  @media (min-width: ${p => p.theme.screens.desk}) {
    font-size: 30px;
  }
`;

export const Button = styled.button<QuizCardProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  margin-top: 10px;

  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: 14px;

  border-radius: 50px;
  color: ${p => p.theme.colors.neutral.white};
  background-color: ${p => (p.$isMale ? p.theme.colors.bg.purple : p.theme.colors.bg.green)};

  @media (min-width: ${p => p.theme.screens.tab}) {
    height: 80px;
    margin-top: 15px;
    font-size: 25px;
  }

  @media (min-width: ${p => p.theme.screens.note}) {
    height: 90px;
    font-size: 30px;
  }

  @media (pointer: fine) {
    &:hover {
      background-color: ${p =>
        p.$isMale ? p.theme.colors.hover.hPurple : p.theme.colors.hover.hGreen};

      #Vector_2_2_ {
        animation: ${pulse2} 350ms infinite alternate;
      }

      #Vector_2_3_ {
        animation: ${pulse1} 300ms infinite alternate;
      }
    }
  }

  @media (pointer: coarse) {
    #Vector_2_2_ {
      animation: ${pulse2} 350ms infinite alternate;
    }

    #Vector_2_3_ {
      animation: ${pulse1} 300ms infinite alternate;
    }
  }
`;

export const ArrowIcon = styled(Arrow)`
  width: 30px;
  height: 30px;
  margin-left: 10px;

  @media (min-width: ${p => p.theme.screens.tab}) {
    width: 60px;
    margin-left: 25px;
  }
`;
