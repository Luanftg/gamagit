import React, {useEffect, useState} from  'react';

export default function Repositories() {
    const [repositories,setRepositories] = useState([]);
    useEffect(() => {
        let repositoriesName = localStorage.getItem('repositoriesName');
        repositoriesName = JSON.parse(repositoriesName);
        setRepositories(repositoriesName);
    }, []);
    return (
        <div>
            <h1>Repositórios</h1>
            <ol>
                {repositories.map(repository => {
                    return (
                    <li> {repository}</li>
                    )
                })}
            </ol>
        
        
        </div>
        )
}