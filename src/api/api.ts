import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://hsbcguesserapi.azurewebsites.net/'
    // baseURL: 'https://localhost:5001/'
});

export default instance;