import axios from 'axios';

export default axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Access-Control-Allow-Origin': '*',
    Accept: 'application/json;odata.metadata=full',
    'Content-Type': 'application/json',
  },
});
