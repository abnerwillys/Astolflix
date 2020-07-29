import React    from 'react'
import { Link } from 'react-router-dom'
import Logo     from '../../assets/img/Logoastolfo1.png'
import {LogoImage, MenuWrapper} from './style.js'
import Button from '../Button'
import './Menu.css'

function Menu() {
    return (
        <MenuWrapper className="Menu">
            <Link to='/'>
                <LogoImage src={Logo} alt="AstolFlix Logo" />
            </Link>

            <Button as={Link} className="ButtonLink" to='/cadastro/video'>
                Novo Vídeo
            </Button>
        </MenuWrapper>
    )
}

export default Menu