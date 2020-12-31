import styled from 'styled-components';

import { CLASS } from '../../types/classes.types';
import { COLORS } from '../../types/color.types';

type Props = {
  charClass: CLASS
}

export const IconWrapper = styled.div`
  border: 2px solid ${(props: Props) => props ? `${COLORS[props.charClass]}` : ''};


`;
