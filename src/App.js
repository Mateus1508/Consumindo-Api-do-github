import "./styles.css";
import Repositories from "./components/Repositories";
import Api from "./services/api";
import { useEffect, useState } from "react";

export default function App() {
  const [repos, setRepos] = useState([]);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    Api.get("repos").then(({ data }) => {
      setRepos(data);
      setFilter(data);
    });
  }, []);

  const Todos = () => {
    setRepos(filter);
  };
  const filterFront = () => {
    const frontRepos = filter.filter((repos) => repos.name.includes("front"));
    setRepos(frontRepos);
  };

  const filterBack = () => {
    const backRepos = filter.filter((repos) => repos.name.includes("back"));
    setRepos(backRepos);
  };
  console.log(repos);
  return (
    <div className="App" onChange={Todos}>
      <button onClick={filterFront}>Frontend</button>
      <button onClick={filterBack}>Backend</button>
      <button onClick={Todos}>Todos</button>

      {repos?.map((repos) => (
        <Repositories
          key={repos.id}
          id={repos.id}
          name={repos.description}
          demo={repos.homepage}
          github={repos.html_url}
        />
      ))}
    </div>
  );
}
