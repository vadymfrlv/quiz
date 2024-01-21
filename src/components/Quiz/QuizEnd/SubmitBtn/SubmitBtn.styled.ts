import styled from 'styled-components';

import { pulse1, pulse2 } from 'styles/animation';
import Arrow from 'assets/images/svg/arrow.svg';

export const GetPlanBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 45px;
  margin: 15px auto 0;

  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: 14px;

  border-radius: 50px;
  color: ${p => p.theme.colors.neutral.white};
  background-color: ${p => p.theme.colors.bg.green};

  @media (min-width: ${p => p.theme.screens.tab}) {
    width: 400px;
    height: 60px;
    margin-top: 25px;
    font-size: 20px;
  }

  @media (min-width: ${p => p.theme.screens.desk}) {
    width: 500px;
  }

  #Vector_2_2_ {
    animation: ${pulse2} 350ms infinite alternate;
  }

  #Vector_2_3_ {
    animation: ${pulse1} 300ms infinite alternate;
  }

  @media (pointer: fine) {
    &:hover {
      background-color: ${p => p.theme.colors.hover.hGreen};
    }
  }
`;

export const ArrowIcon = styled(Arrow)`
  width: 40px;
  height: 40px;
  margin-left: 10px;

  @media (min-width: ${p => p.theme.screens.tab}) {
    width: 60px;
    margin-left: 25px;
  }
`;
