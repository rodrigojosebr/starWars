import axios from 'axios';

export async function getData(url) {
  return axios(url)
  .then(res => res.data)
};