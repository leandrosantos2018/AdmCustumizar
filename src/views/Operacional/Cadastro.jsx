import React from 'react';
import './Cadastro.css';
import '../../assed/css/bootstrap.min.css';

const CadastroUsers = props => (
    <div>
        <h1>Cadastro de Usuários</h1>

     <form>
        <div className="form-group">
            <label>Nome:</label>
            <input type="text" className="form-control" size={55} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nome" /> 
            
            <label>Sobrenome:</label>
            <input type="text" className="form-control" size={50} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Sobrenome" />  
        
                <label>Tipo de Usuário:</label>
                <select className="form-control" id="exampleFormControlSelect1">
                    <option>Selecione</option>
                    <option>Administrador</option>
                    <option>Usuário</option>
                </select>
            
            <label>Email:</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
    
        <button className="btn btn-primary">Gravar</button>

        </div>
     </form>
        
    </div>

)


export default CadastroUsers;