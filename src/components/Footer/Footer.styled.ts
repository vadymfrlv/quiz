import styled, { css } from 'styled-components';

import Visa from 'assets/images/svg/visa.svg';
import Mastercard from 'assets/images/svg/mastercard.svg';
import Paypal from 'assets/images/svg/paypal.svg';

const sharedTextStyle = css`
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: 16px;
  color: ${p => p.theme.colors.neutral.gray};
`;

const sharedPaymentIconStyle = css`
  width: 40px;
  height: 30px;

  &:not(:last-child) {
    margin-right: 14px;
  }
`;

export const FooterStyled = styled.footer`
  display: flex;
  justify-content: center;
  margin-top: auto;
  padding: 20px;

  background-color: ${p => p.theme.colors.bg.white};
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PhysicalAddress = styled.span`
  ${sharedTextStyle}
`;

export const Email = styled.a`
  ${sharedTextStyle}

  margin-top: 5px;
`;

export const EmailAndPaymentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;

  @media (min-width: ${p => p.theme.screens.tab}) {
    flex-direction: row;
    align-items: center;
  }
`;

export const PaymentsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;

  @media (min-width: ${p => p.theme.screens.tab}) {
    margin-top: 0;
  }
`;

export const VisaLogo = styled(Visa)`
  ${sharedPaymentIconStyle}
`;

export const MastercardLogo = styled(Mastercard)`
  ${sharedPaymentIconStyle}
`;

export const PaypalLogo = styled(Paypal)`
  ${sharedPaymentIconStyle}
`;
