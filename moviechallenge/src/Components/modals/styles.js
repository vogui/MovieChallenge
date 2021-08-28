
import styled,{ keyframes } from 'styled-components'
import { colors } from '../helpers/styledHelpers'

const Grown = keyframes`
0% {
  transform: scale(0.5);
}
100% {
  transform: scale(1);
}
`
export const Div = styled.div`
width:100%;
height:100vh;
background-color:transparent;
display: flex;
align-items:center;
justify-content:center;
`
