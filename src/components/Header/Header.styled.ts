import styled from 'styled-components';

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
`;

export const AppTitle = styled.span`
  margin-left: 17px;

  font-weight: 600;
  font-size: 25px;
  text-transform: capitalize;

  color: ${p => p.theme.colors.neutral.blacked};
`;

export const AppLogo = styled.img`
  width: 50px;
  height: 50px;
`;
