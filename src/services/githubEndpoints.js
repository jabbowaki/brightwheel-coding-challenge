export const getStarredRepos = () => {
  return fetch(
    "https://api.github.com/search/repositories?q=stars:>0&sort=stars&per_page=100"
  )
    .then(response => response.json())
    .catch(err => console.log("Something went wrong fetching repos", err));
};

export const getRecentCommits = (url, timespan) => {
  // assuming timespan needs to be in UTC, but GH documentation is unclear
  return fetch(`${url}/commits?since= ${timespan}`)
    .then(response => response.json())
    .catch(err => console.log("Unable to get recent commits", err));
};
