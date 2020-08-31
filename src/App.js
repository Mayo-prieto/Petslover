import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from '../styles/GlobalStyle'
import { Logo } from './components/Logo'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'

export const App = () => (
  <div>
    <GlobalStyle />
    <Logo />
    <ListOfCategories />
    <ListOfPhotoCards />
  </div>
)
