function searchUser(nomeUser:string){
  return fetch(
    `https://api.github.com/users/${nomeUser}`,
  );
};

function searchRepos(nomeUser:string){
  return fetch(
    `https://api.github.com/users/${nomeUser}/repos?sort=created&per_page=5`,
  );
};

export { searchUser, searchRepos };