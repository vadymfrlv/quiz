import { Formik, ErrorMessage } from 'formik';
import Confetti from 'react-confetti';

import { emailValidationSchema } from 'utils/helpers/emailValidation';
import { useWindowDimensions } from 'utils/hooks/useWindowDimensions';

import {
  FormStyled,
  FieldStyled,
  ErrorDescription,
  PrivacyInfoWrapper,
  PrivacyIcon,
  PrivacyInfo,
  FinalMessage,
} from './QuizEnd.styled';
import { SubmitBtn } from './SubmitBtn/SubmitBtn';

interface QuizEndProps {
  isQuizFinished: boolean;
  setIsQuizFinished: React.Dispatch<React.SetStateAction<boolean>>;
  setProgress: React.Dispatch<React.SetStateAction<number>>;
}

export const QuizEnd = ({ isQuizFinished, setIsQuizFinished, setProgress }: QuizEndProps) => {
  const { width, height } = useWindowDimensions();

  return (
    <>
      {!isQuizFinished && (
        <Formik
          initialValues={{ email: '' }}
          validationSchema={emailValidationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            console.log(values);
            setSubmitting(false);
            resetForm();
            setIsQuizFinished(true);
            setProgress(110);
          }}
        >
          {() => (
            <>
              <FormStyled>
                <FieldStyled type="email" name="email" placeholder="Your email" />
                <ErrorMessage name="email" component={ErrorDescription} />
              </FormStyled>

              <PrivacyInfoWrapper>
                <PrivacyIcon />
                <PrivacyInfo>
                  We respect your privacy and use your email only to send you the Food-mentor
                  program and other important emails. You won't receive spam.
                </PrivacyInfo>
              </PrivacyInfoWrapper>

              <SubmitBtn />
            </>
          )}
        </Formik>
      )}

      {isQuizFinished && (
        <>
          <Confetti width={width} height={height} recycle={false} />
          <FinalMessage>Thank you!</FinalMessage>
        </>
      )}
    </>
  );
};
