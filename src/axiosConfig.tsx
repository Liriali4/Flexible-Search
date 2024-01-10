// axiosInstance.js (ou o nome que preferir)

import axios from 'axios';

const typesenseServer = 'http://localhost:8108'; // Substitua pela URL do seu servidor Typesense

const axiosInstance = axios.create({
  baseURL: typesenseServer,
});

export default axiosInstance;
