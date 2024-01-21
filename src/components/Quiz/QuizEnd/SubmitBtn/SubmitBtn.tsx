import { useFormikContext } from 'formik';

import { GetPlanBtn, ArrowIcon } from './SubmitBtn.styled';

export const SubmitBtn = () => {
  const { submitForm, isSubmitting } = useFormikContext();
  return (
    <GetPlanBtn onClick={submitForm} disabled={isSubmitting}>
      Get my plan
      <ArrowIcon />
    </GetPlanBtn>
  );
};
