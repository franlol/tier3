import React from 'react';

import Header from '../../components/Header/Header';

import { Main, Wrapper } from './home.styles';

export default function Home() {
  return (
    <Wrapper className='container'>
      <Header />

      <Main>
        {/*<Icon charClass={CLASS.Shaman} />*/}
      </Main>

      <footer style={{ margin: 'auto 0 0' }}>
        footer
      </footer>
    </Wrapper>
  )
}
