import styled from "styled-components";
import { SCREEN_MQ } from "../../styles/breakpoints";
import { THEME } from "../../types/theme.types";

export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;

  padding: 0 0 20px;
  height: auto;

  @media ${SCREEN_MQ.tablet} {
    padding: 0 0 40px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  height: 80px;
`;

export const H1 = styled.h1`
  text-align: center;
  text-size: 32px;
  
  margin: 0;
  padding-left: 40px; ${''/* To avoid the width of the burger and make h1 rly centered */}

  height: 40px;
  width: 100%;

  color: ${THEME.header};
`;
