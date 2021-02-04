import styled from 'styled-components'
import { Link } from 'react-router-dom'


// Styled AdmHeader
export const AdmHeaderContainer = styled.header`
   font-family: 'Roboto', sans-serif;
   background-color: black;
   color: black;
   width: 100%;
   height: 16vh;
`

export const AdmLogo = styled.img`
   width: 100px;
   margin-left: 2%;
   margin-right: 50%;
   margin-top: 0px;
   padding-bottom: 5px;
`



// Styled Header
export const HeaderContainer = styled.header`
   font-family: 'Roboto', sans-serif;
   background-color: black;
   color: black;
   width: 100%;
   height: 30vh;
`

export const Logo = styled.img`
   width: 130px;
   margin-left: 2%;
   margin-right: 55%;
   margin-top: 10px;
   padding-bottom: 5px;
`

export const Menu = styled(Link)`
   font-family: 'Roboto', sans-serif;
   cursor: pointer;
   text-decoration: none;
   &:hover {
     border-bottom: 3px solid orange;
   }
   font-size: 16px;
   margin-left: 4%;
   color:#DAA520;
`



// Styled Footer
export const FooterContainer = styled.footer`
   background-color: black;
   color: black;
   width: 100%;
   height: 16vh;
   display: flex;
   justify-content: center;
   position: absolute;
`

export const IconsSocial = styled.img`
   width: 60px;
   margin-top: 2%;
   margin-right: 1%;
   margin-left: 0%;
   background-color: black;
`