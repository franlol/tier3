import styled from 'styled-components';

import { CLASS } from '../../../types/classes.types';
import { COLORS } from '../../../types/color.types';
import { THEME } from '../../../types/theme.types';

type Props = {
  charClass: CLASS
}

export const Li = styled.li`
  padding: 0 4px;  
  color: ${THEME.text};  

  &:hover {
    cursor: pointer;

    text-decoration: underline;
    text-decoration-color: ${(props: Props) => COLORS[props.charClass]};
  }
`;
