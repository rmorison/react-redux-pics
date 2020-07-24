import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 7tjhZzBOdwFSg76g9aepF8q2GgF5cDi7NgJcUFfAF6M',
  },
});
