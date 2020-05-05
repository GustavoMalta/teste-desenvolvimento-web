import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API || "localhost:3000"
});

export default api;