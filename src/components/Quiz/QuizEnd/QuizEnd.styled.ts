import styled from 'styled-components';
import { Form, Field } from 'formik';

import Privacy from 'assets/images/main/privacy.webp';

export const FormStyled = styled(Form)`
  position: relative;
`;

export const FieldStyled = styled(Field)`
  display: flex;
  align-items: center;
  width: 300px;
  height: 45px;
  margin: 0 auto;
  padding: 20px;

  font-weight: ${p => p.theme.fontWeights.semiBold};
  font-size: 15px;

  color: ${p => p.theme.colors.neutral.gray};
  border: none;
  border-radius: 50px;
  border: 3px solid ${p => p.theme.colors.border.green};

  outline: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  &:hover {
    border-color: ${p => p.theme.colors.hover.hGreen};
  }

  @media (min-width: ${p => p.theme.screens.tab}) {
    width: 400px;
    height: 60px;
    font-size: 20px;
  }

  @media (min-width: ${p => p.theme.screens.desk}) {
    width: 500px;
  }
`;

export const ErrorDescription = styled.span`
  position: absolute;
  top: -27px;
  left: 50%;
  transform: translateX(-50%);

  font-size: 18px;
  text-align: center;

  color: ${p => p.theme.colors.progress.error};
`;

export const PrivacyInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 170px auto 0;
  width: 300px;
  padding: 15px 21px;

  border-radius: 20px;
  background-color: ${p => p.theme.colors.bg.gray};

  @media (min-width: ${p => p.theme.screens.tab}) {
    width: 400px;
    margin: 120px auto 0;
  }

  @media (min-width: ${p => p.theme.screens.desk}) {
    width: 500px;
    margin: 150px auto 0;
  }
`;

export const PrivacyIcon = styled.div`
  width: 80px;
  height: 30px;
  background-image: url(${Privacy});
  background-size: cover;
  background-position: center;

  @media (min-width: ${p => p.theme.screens.tab}) {
    width: 50px;
  }
`;

export const PrivacyInfo = styled.p`
  margin-left: 12px;

  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: 14px;
  line-height: 1.4;

  color: ${p => p.theme.colors.neutral.gray};

  @media (min-width: ${p => p.theme.screens.tab}) {
    font-size: 16px;
  }
`;

export const FinalMessage = styled.p`
  margin-top: 170px;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: 50px;
  text-align: center;

  color: ${p => p.theme.colors.neutral.blacked};
`;
