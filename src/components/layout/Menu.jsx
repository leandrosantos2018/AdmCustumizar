import './Menu.css';

import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import React from "react";

const Menu = props => {
  return (
    
    <div className="Menu">
     <nav>
       <ul>
         <li>
            <Link to="/Home">Início</Link>
         </li>
         <li>
            <Link to="/About">Sobre</Link>
         </li>
         <li>
            <Link to="/CadastroUsers">Cadastro</Link>
         </li>

         <li>
            <Link to="/param/123">Param #01</Link>
         </li>
         <li>
            <Link to="/naoexites">não existe</Link>
         </li>
       </ul>
     </nav>
    </div>

  )
}

export default Menu;