const Card = props => {
  const { name, stars, url } = props;

  return (
    <div className="card">
      <p>{name}</p>
      <p>{stars} stars</p>
      <a href={url}>{url}</a>
      <p>Latest Commits</p>
    </div>
  );
};

export default Card;
