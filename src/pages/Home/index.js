import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import * as S from './styled';

function App(props) {

  const [usuario,setUsuario] = useState('');  
  const history = useHistory();
  const [erro, setErro] = useState(false);


  function handlePesquisa() {

    axios.get(`https://api.github.com/users/${usuario}/repos`)
    .then(response => {
      const repositories = response.data;
      const repositoriesName = [];
      repositories.map((repository) => (
        repositoriesName.push(repository.name)
      ));
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName))
      setErro(false);
      history.push('/repositories');
    })
    .catch(err=>{
      setErro(true);
    });
  }
    return (
      <S.HomeContainer>
        <S.Content>
          <S.Input className="usuario" placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)}/>
        <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
        </S.Content>
        {erro ? <S.ErrorMsg>Ocorreu um erro. Tente novamente.</S.ErrorMsg> : ''}
        
      </S.HomeContainer>
    );
}

export default App;