import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


function App(props) {

  const [usuario,setUsuario] = useState('');  
  const history = useHistory();

  function handlePesquisa() {

    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
      
    const repositories = response.data;
      const repositoriesName = [];
      
      repositories.map((repository) => {
        repositoriesName.push(repository.name);
      });
    
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName))
      history.push('/repositories');

    });
  }
    return (

      <>
        <p>{usuario}</p>
        <input className="usuario" placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)}/>
        <button type="button" onClick={handlePesquisa}>Pesquisar</button>
      </>
    );
}

export default App;