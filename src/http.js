import axios from 'axios';

let token = localStorage.token

export const HTTP = axios.create({
  baseURL: `https://wirvsvirusretail.azurewebsites.netn`,
  headers: {
    Authorization: 'Bearer ' + token
  }
})

// Add a 401 response interceptor
axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if (401 === error.response.status) {
      window.location = '/login';
  } else {
      return Promise.reject(error);
  }
});