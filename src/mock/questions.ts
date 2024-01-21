import { Question } from 'types/question';

export const questions: Question[] = [
  {
    id: 1,
    title: 'Weight Loss Plan',
    hint: 'Choose your gender to get started',
    isBtn: true,
    options: [
      { description: 'Male', image: '/quiz-images/gender/man.webp' },
      { description: 'Female', image: '/quiz-images/gender/woman.webp' },
    ],
  },
  {
    id: 2,
    title: 'Choose your goal',
    options: [
      { description: 'Lose weight', image: '/quiz-images/goals/lose-weight.webp' },
      { description: 'Get perfect fit body', image: '/quiz-images/goals/fit-body.webp' },
      { description: 'Tone muscles', image: '/quiz-images/goals/muscles.webp' },
      { description: 'Be healthier', image: '/quiz-images/goals/be-healthier.webp' },
    ],
  },
  {
    id: 3,
    title: 'Choose your current body type',
    isColumn: true,
    options: [
      { description: 'Regular', image: '/quiz-images/body-types/regular.webp' },
      { description: 'Plumb', image: '/quiz-images/body-types/plumb.webp' },
      { description: 'Extra plumb', image: '/quiz-images/body-types/extra-plumb.webp' },
    ],
  },
  {
    id: 4,
    title: 'Do you workout?',
    isColumn: true,
    options: [
      { description: "No, I don't", image: '/quiz-images/activity/denial.webp' },
      { description: 'Only walks', image: '/quiz-images/activity/walk.webp' },
      { description: '1-2 times a week', image: '/quiz-images/activity/run.webp' },
      { description: '3-5 times a week', image: '/quiz-images/activity/power.webp' },
    ],
  },
  {
    id: 5,
    title: 'Enter your email to get your Personal Weight loss Plan!',
    isColumn: true,
    options: [],
  },
];
