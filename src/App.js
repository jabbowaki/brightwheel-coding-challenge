import "./App.css";
import { useEffect, useState } from "react";
import { getStarredRepos } from "./services/githubEndpoints";
import Card from "./components/Card";

function App() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await getStarredRepos();
      setRepos(response.items);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      {repos.map(repo => (
        <Card
          apiUrl={repo.url}
          name={repo.name}
          stars={repo.stargazers_count}
          url={repo.html_url}
        />
      ))}
    </div>
  );
}

export default App;
