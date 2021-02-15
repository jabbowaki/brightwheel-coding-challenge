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
      <p className="repo-title">{name}</p>
      <p>&#9734; {stars}</p>
      <a href={url}>{url}</a>
      <a href="#" onClick={showCommits} className="recent-commits">
        View recent commits
      </a>
      {showModal && (
        <Modal
          showModal={setShowModal}
          commits={recentCommits}
          title={"Commits from the last 24 hours"}
        />
      )}
    </div>
  );
};

export default Card;
