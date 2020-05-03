import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    Authorization: {
      toString () {
        return `Bearer ${localStorage.getItem('@MyFinances:token')}`
      }
    }
  }
});

export default api;
