import { QuizCardStyled, Image, Button, OptionDescr, ArrowIcon } from './QuizCard.styled';

interface QuizCardProps {
  image: string;
  description: string;
  isColumn: boolean | undefined;
  isBtn: boolean | undefined;
  onClick: () => void;
}

export const QuizCard = ({ image, description, isColumn, isBtn, onClick }: QuizCardProps) => {
  const checkIfMale = description === 'Male';

  return (
    <QuizCardStyled $isColumn={isColumn} $isBtn={isBtn} onClick={isBtn ? undefined : onClick}>
      <Image $isColumn={isColumn} src={image} width={50} alt={description} />
      {isBtn ? (
        <Button $isMale={checkIfMale} onClick={onClick}>
          {description}
          <ArrowIcon />
        </Button>
      ) : (
        <OptionDescr $isColumn={isColumn}>{description}</OptionDescr>
      )}
    </QuizCardStyled>
  );
};
