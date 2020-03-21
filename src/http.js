import axios from 'axios';

let token = 'fdsf';

export const HTTP = axios.create({
  baseURL: `https://wirvsvirusretail.azurewebsites.net`,
  headers: {
    Authorization: 'Bearer ' + token
  }
})