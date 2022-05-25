import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import * as S from './styled';

function App(props) {

  const [usuario,setUsuario] = useState('');  
  const history = useHistory();

  function handlePesquisa() {

    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
      
    const repositories = response.data;
      const repositoriesName = [];
      
      repositories.map((repository) => (
        repositoriesName.push(repository.name)
      ));
    
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName))
      history.push('/repositories');

    });
  }
    return (
      <S.HomeContainer>
        <S.Content>
          <S.Input className="usuario" placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)}/>
        <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
        </S.Content>
      </S.HomeContainer>
    );
}

export default App;