import React, { useContext } from 'react'

import ListItem from './ListItem/ListItem'
import headerContext from '../../context/header/header.context';

import { CLASS } from '../../types/classes.types'
import { Nav } from './navbar.styles'

export default function Navbar() {
  const { burgerOpen } = useContext(headerContext);

  return (
    <Nav burgerOpen={burgerOpen}>
      <ul>
        {Object.values(CLASS).map((charClass, index) => <ListItem key={index} charClass={charClass} />)}
      </ul>
    </Nav>
  )
}
