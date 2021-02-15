const Modal = props => {
  const { commits, title } = props;
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{title}</h2>
        <div>
          {commits.length > 0 ? (
            commits.map(row => (
              <div>
                <p>Author: {row.commit.author.name}</p>
                <p>Date: {row.commit.author.date}</p>
                <p>Commit Message: {row.commit.message}</p>
              </div>
            ))
          ) : (
            <p>No recent commits</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
