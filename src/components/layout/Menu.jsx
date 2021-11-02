import './Menu.css';

import React from "react";

const Menu = props => {
  return (
    
    <div className="Menu">
     <nav>
       <ul>
         <li>
            <a href="/">Início</a>
         </li>
         <li>
            <a href="/">Sobre</a>
         </li>
       </ul>
     </nav>
    </div>

  )
}

export default Menu;