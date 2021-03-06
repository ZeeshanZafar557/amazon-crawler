/* eslint-disable import/prefer-default-export */
import axios from 'axios';
console.log('zeeshan',process.env.REACT_APP_API_HOST)
const http = {
  search: term => axios.get(`${process.env.REACT_APP_API_HOST}/api/search?searchTerm=${term}`),
  saveQuery: crawlioSearch => axios.post(`${process.env.REACT_APP_API_HOST}/api/save-query`, crawlioSearch),
};
export {
  http,
};
