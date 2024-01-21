import styled, { keyframes } from 'styled-components';

import Arrow from 'assets/images/svg/arrow.svg';

interface QuizItemProps {
  $isMale?: boolean;
  $isColumn?: boolean;
  $isBtn?: boolean;
}

const pulse1 = keyframes`
  0% {
    opacity: 0.9;
  }
  25% {
    opacity: 0.8;
  }
  50% {
    opacity: 0.7;
  }
  50% {
    opacity: 0.6;
  }
  100% {
    opacity: 0.5;
  }
`;

const pulse2 = keyframes`
  0% {
    opacity: 0.75;
  }
  15% {
    opacity: 0.7;
  }
  25% {
    opacity: 0.65;
  }
  50% {
    opacity: 0.45;
  }
  75% {
    opacity: 0.35;
  }
  100% {
    opacity: 0.25;
  }
`;

export const QuizItemStyled = styled.li<QuizItemProps>`
  display: flex;
  flex-direction: ${p => (p.$isColumn ? 'row-reverse' : 'column')};
  align-items: ${p => (p.$isColumn ? 'center' : 'normal')};
  justify-content: ${p => (p.$isColumn ? 'space-between' : 'normal')};
  height: ${p => (p.$isBtn ? '300px' : p.$isColumn ? '90px' : '180px')};
  padding: ${p => (p.$isColumn ? '10px 10px 10px 20px' : '10px')};

  border-radius: ${p => (p.$isColumn ? '25px' : '30px')};
  background-color: ${p => p.theme.colors.bg.white};
  cursor: ${p => (p.$isBtn ? 'default' : 'pointer')};

  &:hover {
    outline: ${p => (p.$isBtn ? 'none' : `3px dashed ${p.theme.colors.neutral.gray}`)};
  }

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
`;

export const Image = styled.img<QuizItemProps>`
  width: ${p => (p.$isColumn ? '70px' : '100%')};
  height: 100%;
  object-fit: cover;
  border-radius: ${p => (p.$isColumn ? '15px' : '20px')};

  @media (min-width: ${p => p.theme.screens.tab}) {
    width: ${p => (p.$isColumn ? '80px' : '100%')};
    border-radius: ${p => (p.$isColumn ? '20px' : '25px')};
  }
`;

export const OptionDescr = styled.p<QuizItemProps>`
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

export const Button = styled.button<QuizItemProps>`
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

  &:hover {
    background-color: ${p => (p.$isMale ? '#433ae5' : '#2BD954')};

    #Vector_2_2_ {
      animation: ${pulse2} 350ms infinite alternate;
    }

    #Vector_2_3_ {
      animation: ${pulse1} 300ms infinite alternate;
    }
  }

  @media (min-width: ${p => p.theme.screens.tab}) {
    height: 80px;
    margin-top: 15px;
    font-size: 25px;
  }

  @media (min-width: ${p => p.theme.screens.note}) {
    height: 90px;
    font-size: 30px;
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
