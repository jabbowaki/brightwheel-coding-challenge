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
      <h1>Top 100 Starred Github Repos</h1>
      <main className="cards">
        {repos.map(repo => (
          <Card
            key={repo.id}
            apiUrl={repo.url}
            name={repo.name}
            stars={repo.stargazers_count}
            url={repo.html_url}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
