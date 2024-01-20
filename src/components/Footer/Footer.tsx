import {
  FooterStyled,
  ContentWrapper,
  PhysicalAddress,
  Email,
  EmailAndPaymentsWrapper,
  PaymentsWrapper,
  VisaLogo,
  MastercardLogo,
  PaypalLogo,
} from './Footer.styled';

export const Footer = () => {
  return (
    <FooterStyled>
      <ContentWrapper>
        <PhysicalAddress>
          NETPEAK EOOD, 47 CHERNI VRUH Blvd, fl. 5 Lozenets, Sofia, Bulgaria
        </PhysicalAddress>
        <EmailAndPaymentsWrapper>
          <Email href="mailto:support@food-mentor.com">support@food-mentor.com</Email>
          <PaymentsWrapper>
            <VisaLogo />
            <MastercardLogo />
            <PaypalLogo />
          </PaymentsWrapper>
        </EmailAndPaymentsWrapper>
      </ContentWrapper>
    </FooterStyled>
  );
};
