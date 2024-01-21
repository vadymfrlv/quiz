import Logo from 'assets/images/main/logo.webp';

import { HeaderStyled, AppLogo, AppTitle } from './Header.styled';

export const Header = () => {
  return (
    <HeaderStyled>
      <AppLogo src={Logo} width="50px" height="50px" alt="food mentor logo" />
      <AppTitle>Food mentor</AppTitle>
    </HeaderStyled>
  );
};
