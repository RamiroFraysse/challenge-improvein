export interface IUser{
  id:string;
  email:string;
}

export interface IUserForm{
  email:string;
  password:string;
}

export const UserEmptyState : IUser = {
  id: '', 
  email:''
}

export interface IMember{
  name:string;
}

export interface IBand{
  id:number;
  name:string;
  genreCode:string;
  year:number;
  country:string;
  members:IMember[];
}

export interface IAlbum{
  id:number;
  bandId:number;
  name:string;
  year:number;
}

export interface ILoader{
  isLoadingApi:boolean;
}

export interface IGenre{
  code:string;
  name:string;
}

export const LoaderEmptyState : ILoader = {
  isLoadingApi: false
}