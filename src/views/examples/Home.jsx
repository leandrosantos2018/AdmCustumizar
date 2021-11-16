import React from "react";
import './Home.css';

const Home = props => {
    return (
        <div>
            <h1>Dashboard</h1>
           
            <h2>Bem vindo!</h2>
        
            <div className="Home">
            
           <div class="card">
           <card-title>Usuários Ativos</card-title> 
           100                   
            </div>

            <div class="card">
           <card-title>Usuários Administrador</card-title> 
           100                   
            </div>

            <div class="card">
           <card-title>Usuários</card-title> 
           100                   
            </div>
        </div>
        </div>

    );
};

export default Home;