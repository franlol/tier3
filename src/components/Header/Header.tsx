import React from 'react';

import Burger from '../Burger/Burger';
import Navbar from '../Navbar/Navbar';

import HeaderProvider from '../../context/header';
import { H1, HeaderWrapper, TitleWrapper } from './header.styles';

const Header = () => {
  return (
    <HeaderProvider>
      <HeaderWrapper>

        <TitleWrapper>
          <H1>Tier 3 helper</H1>
          <Burger />
        </TitleWrapper>

        <Navbar />

      </HeaderWrapper>
    </HeaderProvider >
  );
}

export default Header;
