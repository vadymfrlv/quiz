import { useState } from 'react';

import { questions } from 'mock/questions';
import { QuizCard } from 'components/Quiz/QuizCard/QuizCard';

import { Options, QuizTiming, QuestionTitle, QuestionHint } from './Quiz.styled';
import { QuizEnd } from 'components/Quiz/QuizEnd/QuizEnd';
import { ProgressBar } from './ProgressBar/ProgressBar';

export const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [progress, setProgress] = useState(1);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const firstQuestion = currentQuestionIndex === 0;
  const currentQuestion = questions[currentQuestionIndex];
  const lastQuestion = currentQuestionIndex === questions.length - 1;
  const { title, hint, isColumn, isBtn, options } = currentQuestion;
  const optionsLength = options.length;

  const handleOptionClick = () => {
    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
      setProgress(prevProgress => prevProgress + 100 / questions.length);
    }
  };

  return (
    <>
      <ProgressBar progress={progress} />
      <QuizTiming $isSowing={firstQuestion}>1-minute quiz</QuizTiming>

      {!isQuizFinished && <QuestionTitle>{title}</QuestionTitle>}

      <QuestionHint $isSowing={firstQuestion}>{hint}</QuestionHint>
      <Options $optionsLength={optionsLength} $isColumn={isColumn}>
        {options.map((option, idx) => (
          <QuizCard
            key={idx}
            isColumn={isColumn}
            isBtn={isBtn}
            onClick={handleOptionClick}
            {...option}
          />
        ))}
      </Options>
      {lastQuestion && (
        <QuizEnd
          isQuizFinished={isQuizFinished}
          setIsQuizFinished={setIsQuizFinished}
          setProgress={setProgress}
        />
      )}
    </>
  );
};
