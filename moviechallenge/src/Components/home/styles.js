import styled from "styled-components";
import {mobile, medio} from "../utils/styledHelpers"

export const MoviesContainer = styled.div`
width:90%;
height:79vh;
background:transparent;
display:flex;
flex-direction:column;
align-items:center;
margin-top:2.5%;
`
export const Input = styled.input`
width:50%;
height:50px;
font-size:30px;
border-radius:5px;
@media (max-width: ${mobile}) {
    width:90%;
    margin-top:10px;
    height:20px;
    font-size:15px;  
  }
`
export const InputAño = styled.input`
width:10%;
height:50px;
font-size:20px;
border-radius:5px;
@media (max-width: ${mobile}) {
    width:50%;
    margin-top:10px;
    height:20px;
    font-size:15px;
  }
`
export const DropsContainer = styled.div`
display:flex;
align-items:center;
${props => props.filter === 'Año'?`width:30%;`:`width:50%;`}
@media (max-width: ${mobile}) {
  width:100%;
  align-items:center
}
`
export const FiltersContainer = styled.div`
width:100%;
display:flex;
justify-content:space-between;
align-items:center;
@media (max-width: ${medio}) {
  display:flex;
  flex-direction:column;
  align-items: center;
}
 @media (max-width: ${mobile}) {
    display:flex;
    flex-direction:column;
    align-items: center;
  }
`