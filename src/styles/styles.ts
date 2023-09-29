import { createGlobalStyle } from 'styled-components'

export const colors = {
  lightGreen: '#22AF89',
  white: '#fff'
}

export const breakpoints = {
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  font-family: 'Roboto', sans-serif;
}
`
