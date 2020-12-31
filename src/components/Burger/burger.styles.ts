import styled from 'styled-components';

import { SCREEN_MQ } from '../../styles/breakpoints';
import { THEME } from '../../types/theme.types';

type Props = {
  clicked: boolean;
}

export const BurgerWrapper = styled.button`
  display: flex;
  flex-direction: column;

  outline: 0;
  border: 1px solid transparent;
  border-radius: 3px;
  background: transparent;
  
  height: 39px;
  margin-left: auto;
  padding: 10px 10px;

  & span {
    border: 1px solid ${THEME.text};
    border-radius: 5px;
    
    width: 26px;
    margin: 3px 0;
    
    transition: .1s;

    &:nth-child(1) {
      margin-top: 0;
      transform: ${(props: Props) => props.clicked && 'rotate(-45deg) translate(-5px, 6px)'};
    }

    &:nth-child(2) {
      visibility: ${(props: Props) => props.clicked && 'hidden'};
    }

    &:nth-child(3) {
      margin-bottom: 0;
      transform: ${(props: Props) => props.clicked && 'rotate(45deg) translate(-5px, -7px)'};
    }
  }


  @media ${SCREEN_MQ.tablet} {
    display: none;
  }
`;
