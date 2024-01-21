import styled from 'styled-components';

export const MainStyled = styled.main`
  padding: 30px 0 30px;

  @media (min-width: ${p => p.theme.screens.note}) {
    padding: 30px 0 60px;
  }
`;
