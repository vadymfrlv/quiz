import { ProgressBarWrapper, ProgressBarStyled } from './ProgressBar.styled';

interface ProgressBarProps {
  progress: number;
}

export const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <ProgressBarWrapper>
      <ProgressBarStyled $progress={progress}></ProgressBarStyled>
    </ProgressBarWrapper>
  );
};
