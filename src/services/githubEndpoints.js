export const getStarredRepos = () => {
  return fetch(
    "https://api.github.com/search/repositories?q=stars:>0&sort=stars&per_page=100"
  )
    .then(response => response.json())
    .catch(err => console.log("Something went wrong fetching repos", err));
};
