import React    from 'react'
import { Link } from 'react-router-dom'
import Logo     from '../../assets/img/Logoastolfo.png'
import {LogoImage, MenuWrapper} from './style.js'
import Button from '../Button'
import './Menu.css'

function Menu() {
    return (
        <MenuWrapper className="Menu">
            <Link to='/'>
                <LogoImage src={Logo} alt="AstolFlix Logo" />
            </Link>

            <div>
                <Button as={Link} className="ButtonLink" to='/cadastro/video'>
                    Novo Vídeo
                </Button>

                <Button as={Link} className="ButtonLink" to='/cadastro/categoria'>
                    Nova Categoria
                </Button>
            </div>
        </MenuWrapper>
    )
}

export default Menu