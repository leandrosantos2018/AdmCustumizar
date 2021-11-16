import './Menu.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import '../../assed/css/bootstrap.min.css';


const Menu = props => {
  return (

    <div className="Menu">
        
     <nav className='nav'>
       <ul>
         <li>
            <Link to="/Home">Início</Link>
         </li>
         <li>
            <Link to="/CadastroUsers">Cadastro</Link>
         </li>
         <li>
            <Link to="/About">Sobre</Link>
         </li>

       </ul>
     </nav>
    
    </div>

  )
}

export default Menu;