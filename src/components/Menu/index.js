import React from 'react'
import Logo  from '../../assets/img/Logoastolfo.png'
import {LogoImage, MenuWrapper} from './style.js'
import Button from '../Button'

function Menu() {
    return (
        <MenuWrapper className="Menu">
            <a href='/'>
                <LogoImage src={Logo} alt="AstolFlix Logo" />
            </a>

            <Button as="a" className="ButtonLink" href='/'>
                Novo Vídeo
            </Button>
        </MenuWrapper>
    )
}

export default Menu