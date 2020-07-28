import React from 'react';
import Logo from '../../assets/img/Logo.png';
import { Link } from 'react-router-dom' ;
import './menu.css'
import Button from '../Button/'
function Menu(){
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="CloneFlix logo"></img>
            </Link>
            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;