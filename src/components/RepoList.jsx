const RepoList = ({ repos }) => {
    return (
      <div className="shadow-lg">
        <h2 className="text-3xl my-4 font-bold">Repozitoriji</h2>
        {repos.map((repo) => (
          <p key={repo.id}>{repo.name}</p>
        ))}
      </div>
    );
  };
  
  export default RepoList;