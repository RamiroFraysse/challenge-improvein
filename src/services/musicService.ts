import { LIMIT_PER_PAGE } from '@/utilities';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;


export const getPaginateBands = (currentPage=-1,filter='') => {
  const url = new URL(`${API_URL}/bands`);
  if(currentPage!==-1){
    url.searchParams.append('_page', currentPage.toString());
    url.searchParams.append('_limit', LIMIT_PER_PAGE.toString());
  }
  if(filter!==''){
    url.searchParams.append('q', filter);
  }
  return axios.get(url.toString());
}

export const getAlbumsByBand = (bandId:number) => {
  const url = new URL(`${API_URL}/albums`);
  if(bandId){
    url.searchParams.append('bandId', bandId.toString());
  }
  return axios.get(url.toString());
}

export const getGenreByCode = (code:string)=>{
  const url = new URL(`${API_URL}/genre`);
  if(code!==''){
    url.searchParams.append('code', code);
  }
  return axios.get(url.toString());
}