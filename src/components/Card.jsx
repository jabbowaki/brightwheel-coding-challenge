import { useState } from "react";
import PropTypes from "prop-types";
import { getRecentCommits } from "../services/githubEndpoints";
import { yesterday } from "../utilities";
import Modal from "./Modal";

const Card = props => {
  const { apiUrl, name, stars, url } = props;
  const [recentCommits, setRecentCommits] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const showCommits = async () => {
    const commits = await getRecentCommits(apiUrl, yesterday.toISOString());

    // in a perfect world, I would flatten this data so that Modal doesn't have to map through a nested object
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
          title="Commits from the last 24 hours"
          noDataMessage="No recent commits"
        />
      )}
    </div>
  );
};

Card.propTypes = {
  apiUrl: PropTypes.string,
  name: PropTypes.string,
  stars: PropTypes.number,
  url: PropTypes.string
};

export default Card;
