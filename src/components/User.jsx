import { useEffect, useState } from "react";

export default function User({ user }) {
    const {
      avatar_url,
      name,
      login,
      bio,
      location
    } = user;

    const [repositories, setRepositories] = useState([]);
    


    async function fetchGithubUserData(){
        //setLoading(true)
        const response = await fetch(user.repos_url);//repos
        const data = await response.json();
        setRepositories(data);
        
        console.log(data);
    }

   useEffect(()=>{fetchGithubUserData()},[])

  
    return (
      <div className="user">
        <div className="profile-info">
          <div className="logo">
            <img src={avatar_url} className="avatar" alt="User" />
            <p>{name || login}</p>
          </div>
          <div className="inline">
            <p className="data_header">Bio: </p>
            <p className="data">{bio}</p>
          </div>
          <div className="inline">
            <p>Location: </p>
            <p>{location}</p>
          </div>
          <p className="data_header">Repositories:</p>
          {repositories && repositories.length > 0 ? <div className="repository-list">
            <table>
              {repositories.map((repository) => (
                <tr key={repository.id}>
                    <td>{repository.name}</td>
                </tr>
              ))}
            </table>
           </div> : null }
        </div>
        
        
        
      </div>
    );
}