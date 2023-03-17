import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
${reset}
* {
  box-sizing: border-box;
}
html {
font-family: "Roboto","Arial",sans-serif;
color: #0f0f0f;
}
a{
  text-decoration: none;
  color: inherit;
}
button {
  background-color: transparent;
  border-style: none;
  cursor: pointer;
}
`

export default GlobalStyle
