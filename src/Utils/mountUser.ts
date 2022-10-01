import type IRepos from "../Interfaces/IRepos";
import type IUser from "../Interfaces/IUser";

export default function mountUser(dadosUser: any, dadosRepos: any): IUser {
  const repositorios_recentes = dadosRepos.map((repositorio) => {
    return {
      nome: repositorio.name,
      url: repositorio.url
    } as IRepos;
  })
  
  return {
    avatar_url: dadosUser.avatar_url,
    login: dadosUser.login,
    nome: dadosUser.name,
    perfil_url: dadosUser.html_url,
    repositorios_publicos: dadosUser.public_repos,
    seguidores: dadosUser.followers,
    repositorios_recentes
  };
}