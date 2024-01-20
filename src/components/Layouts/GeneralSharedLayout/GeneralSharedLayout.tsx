import { ResponsiveFlexContainer } from 'components/Containers/ResponsiveFlexContainer';

import { MainStyled } from './GeneralSharedLayout.styled';

interface GeneralSharedLayoutProps {
  children: React.ReactNode;
}

export const GeneralSharedLayout = ({ children }: GeneralSharedLayoutProps) => {
  return (
    <>
      <ResponsiveFlexContainer>
        <MainStyled>{children}</MainStyled>
      </ResponsiveFlexContainer>
    </>
  );
};
