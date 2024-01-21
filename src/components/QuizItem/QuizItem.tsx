import { QuizItemStyled, Image, Button, OptionDescr, ArrowIcon } from './QuizItem.styled';

interface QuizItemProps {
  image: string;
  description: string;
  isColumn: boolean | undefined;
  isBtn: boolean | undefined;
  onClick: () => void;
}

export const QuizItem = ({ image, description, isColumn, isBtn, onClick }: QuizItemProps) => {
  const checkIfMale = description === 'Male';

  return (
    <QuizItemStyled $isColumn={isColumn} $isBtn={isBtn} onClick={isBtn ? undefined : onClick}>
      <Image $isColumn={isColumn} src={image} width={50} alt={description} />
      {isBtn ? (
        <Button $isMale={checkIfMale} onClick={onClick}>
          {description}
          <ArrowIcon />
        </Button>
      ) : (
        <OptionDescr $isColumn={isColumn}>{description}</OptionDescr>
      )}
    </QuizItemStyled>
  );
};
