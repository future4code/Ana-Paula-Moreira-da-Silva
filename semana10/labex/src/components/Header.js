import React from 'react'
import { useHistory } from 'react-router-dom'
import { HeaderContainer, Logo, Menu } from './styled'
import { ButtonAdm } from '../functional/buttons'
import LogoSite from '../images/imagem/logo.png';



const Header = () => {

    const history = useHistory()

    const goToLogin = () => {
        history.push('/login')
    }

    return (
        <HeaderContainer>
            <Logo src={LogoSite} />
            <Menu to='/home'>HOME</Menu>
            <Menu to='/viagens'>VIAGENS</Menu>
            <ButtonAdm onClick={goToLogin}>
                ADM
            </ButtonAdm>
        </HeaderContainer>
    )
}
export default Header;