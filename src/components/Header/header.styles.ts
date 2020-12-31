import styled from "styled-components";
import { THEME } from "../../types/theme.types";

export const Header = styled.header`
  display: flex;
  flex-direction: column;

  height: auto;
`;

export const H1 = styled.h1`
  text-align: center;
  text-size: 32px;
  
  margin: 20px 0 0;
  color: ${THEME.header};
`;