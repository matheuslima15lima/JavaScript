import axios from "axios"

const apiPort = '7118';
const localApi =`https://localhost:${apiPort}/api`;
const externaApi = `https://webapimatheusl.azure-api.net`;

const api = axios.create({
    baseURL :externaApi
});

export default api;