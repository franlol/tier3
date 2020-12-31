import styled from 'styled-components';

import { THEME } from '../../types/theme.types';

type WrapperProps = {
  className?: string;
}

export const Wrapper = styled.div.attrs((props: WrapperProps) => ({ className: props.className }))`
  display: flex;
  flex-direction: column;

  height: 100vh;
`;

export const Main = styled.main`
  width: 300px;
  height: 300px;

  display: flex;
  flex-direction: column;

  border: 1px solid red;
`;

