import type IRepos from "./IRepos";

export default interface IUser {
  login: string;
  avatar_url: string;
  perfil_url: string;
  nome: string;
  repositorios_publicos: number;
  seguidores: number;
  repositorios_recentes: IRepos[];
}