import { useState } from "react";
import { getRecentCommits } from "../services/githubEndpoints";
import { yesterday } from "../utilities";
import Modal from "./Modal";

const Card = props => {
  const { apiUrl, name, stars, url } = props;
  const [recentCommits, setRecentCommits] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const showCommits = async () => {
    const commits = await getRecentCommits(apiUrl, yesterday.toISOString());
    setRecentCommits(commits);
    setShowModal(true);
  };

  return (
    <div className="card">
      <p>{name}</p>
      <p>{stars} stars</p>
      <a href={url}>{url}</a>
      <p onClick={showCommits}>Latest Commits</p>
      {showModal && <Modal commits={recentCommits} title={"Recent Commits"} />}
    </div>
  );
};

export default Card;
