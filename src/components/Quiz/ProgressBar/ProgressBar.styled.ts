import styled from 'styled-components';

interface ProgressBarProps {
  $progress: number;
}

export const ProgressBarWrapper = styled.div`
  position: absolute;
  top: 90px;
  left: 0;
  width: 100%;
  background-color: ${p => p.theme.colors.progress.default};
`;

export const ProgressBarStyled = styled.div<ProgressBarProps>`
  position: relative;

  width: ${p => p.$progress}%;
  height: 4px;

  background-color: ${p => p.theme.colors.progress.filled};
  text-align: center;
  line-height: 30px;

  transition: width 0.5s ease-in;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(50%, -50%);
    width: 15px;
    height: 15px;

    border-radius: 50%;
    background-color: ${p => p.theme.colors.progress.filled};
  }
`;
