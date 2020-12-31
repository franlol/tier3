import React, { ReactNode } from 'react';
import HeaderContext from './header/index';

type Props = {
  children?: ReactNode
}

export default (props: Props) => {
  <HeaderContext>
    {props.children}
  </HeaderContext>
}
