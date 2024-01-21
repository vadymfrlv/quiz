import { useState } from 'react';

import { questions } from 'mock/questions';
import { QuizItem } from 'components/QuizItem/QuizItem';

import { Options, QuizTiming, QuestionTitle, QuestionHint } from './Quiz.styled';

export const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [progress, setProgress] = useState(10);

  const firstQuestion = currentQuestionIndex === 0;
  const currentQuestion = questions[currentQuestionIndex];
  const { title, hint, isColumn, isBtn, options } = currentQuestion;
  const optionsLength = options.length;

  const handleOptionClick = () => {
    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
      setProgress(prevProgress => prevProgress + 100 / questions.length);
    } else {
      // Тут можна обробити завершення квізу
    }
  };

  return (
    <>
      <QuizTiming $isSowing={firstQuestion}>1-minute quiz</QuizTiming>
      <QuestionTitle>{title}</QuestionTitle>
      <QuestionHint $isSowing={firstQuestion}>{hint}</QuestionHint>
      <div>
        <Options $optionsLength={optionsLength} $isColumn={isColumn}>
          {options.map((option, idx) => (
            <QuizItem
              key={idx}
              isColumn={isColumn}
              isBtn={isBtn}
              onClick={handleOptionClick}
              {...option}
            />
          ))}
        </Options>
      </div>
    </>
  );
};
