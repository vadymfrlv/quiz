import styled from 'styled-components';

interface QuestionProps {
  $isSowing?: boolean;
  $isColumn?: boolean;
  $optionsLength?: number;
}

export const QuizTiming = styled.p<QuestionProps>`
  margin-top: 5px;

  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: 16px;
  text-align: center;
  text-transform: uppercase;

  color: ${p => p.theme.colors.neutral.gray};
  visibility: ${p => (p.$isSowing ? 'visible' : 'hidden')};
`;

export const QuestionTitle = styled.h1`
  margin-top: 15px;

  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: 30px;
  text-align: center;

  color: ${p => p.theme.colors.neutral.blacked};

  @media (min-width: ${p => p.theme.screens.note}) {
    font-size: 60px;
  }
`;

export const QuestionHint = styled.h2<QuestionProps>`
  min-height: 30px;
  margin-top: 10px;

  font-weight: ${p => p.theme.fontWeights.semiBold};
  font-size: 18px;
  text-align: center;

  color: ${p => p.theme.colors.neutral.blacked};
  visibility: ${p => (p.$isSowing ? 'visible' : 'hidden')};

  @media (min-width: ${p => p.theme.screens.note}) {
    font-size: 25px;
  }
`;

export const Options = styled.ul<QuestionProps>`
  display: grid;
  grid-template-columns: ${p => (p.$isColumn ? '1fr' : 'repeat(2, 1fr)')};
  gap: 10px;

  margin-top: 20px;

  @media (min-width: ${p => p.theme.screens.tab}) {
    gap: 20px;
  }

  @media (min-width: ${p => p.theme.screens.note}) {
    grid-template-columns: ${p => (p.$isColumn ? '1fr' : `repeat(${p.$optionsLength}, 1fr)`)};
    margin-top: 60px;
  }
`;
