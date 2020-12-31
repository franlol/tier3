import styled from 'styled-components';
import { SCREEN_MQ, SCREEN_PADDING } from '../../styles/breakpoints';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  overflow: hidden;
  height: 100vh;
  width: calc(100vw - ${SCREEN_PADDING.min as any * 2});
  padding: ${SCREEN_PADDING.min};

  font-family: 'Lato', sans-serif;
  font-weight: 300;

  background: #232931;

  @media ${SCREEN_MQ.mobileM} {
    width: calc(100vw - ${SCREEN_PADDING.mobileM as any * 2});
    padding: ${SCREEN_PADDING.mobileM};
  }

  @media ${SCREEN_MQ.tablet} {
    width: calc(100vw - ${SCREEN_PADDING.tablet as any * 2});
    padding: ${SCREEN_PADDING.tablet};

    background: red;
  }

  @media ${SCREEN_MQ.laptop} {
    width: calc(100vw - ${SCREEN_PADDING.laptop as any * 2});
    padding: ${SCREEN_PADDING.laptop};
  }

  @media ${SCREEN_MQ.laptopL} {
    width: calc(100vw - ${SCREEN_PADDING.laptopL as any * 2});
    padding: ${SCREEN_PADDING.laptopL};
  }
`;

export const Main = styled.main`
  height: 300px;

  display: flex;
  flex-direction: column;

  border: 1px solid red;
`;

