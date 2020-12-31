import React, { useContext } from 'react'

import headerContext from '../../context/header/header.context';
import { BurgerWrapper } from './burger.styles'

const Burger = () => {
  const { burgerOpen, setBurgerOpen } = useContext(headerContext)

  const handle = () => setBurgerOpen(!burgerOpen);

  return (
    <BurgerWrapper onClick={handle} clicked={burgerOpen}>
      <span />
      <span />
      <span />
    </BurgerWrapper>
  );
}

export default Burger;
