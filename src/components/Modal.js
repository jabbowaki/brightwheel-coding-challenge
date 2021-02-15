import PropTypes from "prop-types";

const Modal = props => {
  const { showModal, commits, noDataMessage, title } = props;
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={() => showModal(false)}>
          &times;
        </span>
        <h2>{title}</h2>
        {commits.length > 0 ? (
          commits.map(row => (
            <div key={row.sha} className="commit-content">
              <p>Author: {row.commit.author.name}</p>
              <p>Date: {row.commit.author.date}</p>
              <p>Commit Message: {row.commit.message}</p>
            </div>
          ))
        ) : (
          <p>{noDataMessage}</p>
        )}
      </div>
    </div>
  );
};

Modal.propTypes = {
  showModal: PropTypes.func,
  commits: PropTypes.array,
  noDataMessage: PropTypes.string,
  title: PropTypes.string
};

export default Modal;
