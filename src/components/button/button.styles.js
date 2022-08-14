import styled  from 'styled-components'
import { Link } from 'react-router-dom'
export const BaseButton=styled.button`
min-width: 165px;
width: auto;
height: 50px;
letter-spacing: 0.5px;
line-height: 50px;
padding: 0 35px 0 35px;
font-size: 15px;
color: white;
text-transform: uppercase;
font-family: 'Open Sans Condensed';
font-weight: bolder;
border: none;
cursor: pointer;
display: flex;
justify-content: center;

&:hover {
  background-color: white;
  color: black;
  border: 1px solid black;
}
`

export const GoogleSignIn=styled(BaseButton)`
background-color: #1a66df;
color: white;

&:hover {
  background-color: #1351b6;
  border: none;
}
`

export const Inverted=styled(BaseButton)`
background-color: white;
      color: black;
      border: 1px solid black;
  
      &:hover { 
        background-color: black;
        color: white;
        border: none;
      }
    }
`