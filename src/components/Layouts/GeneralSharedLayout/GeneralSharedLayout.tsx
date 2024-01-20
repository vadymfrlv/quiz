import { ResponsiveFlexContainer } from 'components/Containers/ResponsiveFlexContainer';
import { Header } from 'components/Header/Header';

import { MainStyled } from './GeneralSharedLayout.styled';

interface GeneralSharedLayoutProps {
  children: React.ReactNode;
}

export const GeneralSharedLayout = ({ children }: GeneralSharedLayoutProps) => {
  return (
    <>
      <Header />

      <ResponsiveFlexContainer>
        <MainStyled>{children}</MainStyled>
      </ResponsiveFlexContainer>
    </>
  );
};
