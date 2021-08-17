import axios, { AxiosPromise } from 'axios';

export const getNewBooksAPI = (): AxiosPromise<any> => {
  return axios.get('https://api.itbook.store/1.0/new')
}

export const getDetailBookAPI = (isbn13: string): AxiosPromise<any> => {
  return axios.get(`https://api.itbook.store/1.0//books/${isbn13}`)
}

export const searchBookAPI = (keyword: string, pageNum: string): AxiosPromise<any> => {
  return axios.get(`https://api.itbook.store/1.0/search/${keyword}/${pageNum}`)
}
