import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Toolbar from "@material-ui/core/Toolbar";


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
   height: 11vh;
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



// Styled Footer Footer
export const StyledToolBar = styled(Toolbar)`
    display: flex;
    justify-content: space-between;;
    background-color: black;
    padding: 3vh;    
    height: 60px;
   
   
`
export const FooterContainer = styled.div`
    background-color: black;
    display: flex;
    justify-content: space-around;
    align-items: top;
    
`
export const SocialMediaContainer = styled.div`
    display: block;
`
export const FooterTitle = styled.h5`
    font-weight: bold;
    margin: 1px;
    color:#DAA520;
    
`
export const SocialMediaIcon = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0px;
    padding:0px;
    cursor: pointer;  
    color: #DAA520; 
`
export const Copirigth = styled.div`
color: #DAA520
`


