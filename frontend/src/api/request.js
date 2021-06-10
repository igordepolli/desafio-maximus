import Axios from 'axios';

const baseURL = 'http://localhost:3000';

export const request = axios.create({ baseURL });
