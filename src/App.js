import { useState } from "react"
import User from "./components/User"
import "./App.css";


function App(){
  const [userName,setUserName] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchGithubUserData(){
    setLoading(true)
    const response = await fetch(`https://api.github.com/users/${userName}`);//repos
    const data = await response.json();
    if(data){
      setUserData(data);
      setLoading(false);
      setUserName('');
    }
    console.log(data);
  }

  const handleSubmit= (event) =>{
    event.preventDefault();
    fetchGithubUserData()
  }

  if(loading){
    return <div className="loading-container"><h1 className="loader-text">Učitavanje podataka, molim vas pričekajte!</h1></div>
  }

  const handleChange = (event) => {
    setUserName(event.target.value);
  };

  const handleReset = (event) =>{
    setUserData(null);
  };

  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <form className="flex justify-center" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Upišite korisničko ime..."
              onChange={handleChange}
              value={userName}
            />
            <input type="submit" value="Pretraži"></input>
            <input type="reset" onClick={handleReset} value="Reset"></input>
        </form>
      </div>
      {userData !== null ? <User user={userData} /> : null}
      
    </div>
  );
}

export default App;

