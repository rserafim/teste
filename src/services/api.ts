import axios from 'axios';

const api = axios.create({
  baseURL: 'https://nodedeploy.simpls.me',
  // baseURL: 'http://localhost:3333'
})

export default api;