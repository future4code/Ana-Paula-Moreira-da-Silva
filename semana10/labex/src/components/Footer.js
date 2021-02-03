import React from 'react'
import { FooterContainer, IconsSocial } from './styled'
import LogoFacebook from '../images/icons/facebook.png'
import LogoInstagram from '../images/icons/instagram.jpg';
import LogoTwitter from '../images/icons/twitter.png';


const Footer = () => {
    return (
        <FooterContainer>
            <IconsSocial src={LogoFacebook}/>
            <IconsSocial src={LogoInstagram}/>
            <IconsSocial src={LogoTwitter}/>
        </FooterContainer>
    )
}
export default Footer;