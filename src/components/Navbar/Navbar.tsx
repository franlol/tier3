import React from 'react'
import { CLASS } from '../../types/classes.types'
import ListItem from './ListItem/ListItem'
import { Nav } from './navbar.styles'

export default function Navbar() {
  return (
    <Nav>
      <ul>
        {Object.values(CLASS).map((charClass, index) => <ListItem key={index} charClass={charClass} />)}
      </ul>
    </Nav>
  )
}
