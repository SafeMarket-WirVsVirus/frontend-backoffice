import axios from 'axios';

let token = 'fdsf';

export const HTTP = axios.create({
  baseURL: `http://jsonplaceholder.typicode.com/`,
  headers: {
    Authorization: 'Bearer ' + token
  }
})