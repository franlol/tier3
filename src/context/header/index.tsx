import React, { useState } from 'react';

import HeaderContext from './header.context';
import { Props, THeaderState } from './header.types';

export default function HeaderProvider(props: Props) {
  const [burgerOpen, setBurgerOpen] = useState<boolean>(false);

  const state: THeaderState = {
    burgerOpen,
    setBurgerOpen
  }

  return (
    <HeaderContext.Provider value={state}>
      {props.children}
    </HeaderContext.Provider>
  );
}
