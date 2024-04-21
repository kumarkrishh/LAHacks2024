import axios from 'axios';

const url = 'http://localhost:5000';

export const fetchData = () => axios.get(url);

export const postData = (data) => axios.post(`${url}/signup`, data);

export const signin = (data) => axios.post(`${url}/signin`, data);