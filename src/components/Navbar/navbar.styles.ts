import styled from 'styled-components';

import { SCREEN_MQ } from '../../styles/breakpoints';

type NavProps = {
  burgerOpen: boolean;
}

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;  

  height: auto;

  @media ${SCREEN_MQ.tablet} {
    height: 60px;
  }

  & ul {
    display: flex;
    flex-direction: column;

    margin: 0;
    list-style: none;
    
    transition: max-height 0.15s ease-out;

    max-height: ${(props: NavProps) => props.burgerOpen ? '200px' : '0px'};
    visibility: ${(props: NavProps) => props.burgerOpen ? 'visible' : 'hidden'};

    @media ${SCREEN_MQ.tablet} {
      flex-direction: row;
      
      border: 4px solid blue; 
      max-height: 100px;
      height: 30px;

      margin: 0 auto;
      visibility: visible;
    }
  }
`;
