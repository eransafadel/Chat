import axios from "axios";
const BASE_URL ='http://localhost:5000/api/';

export const registerRoute = `${BASE_URL}auth/register`;



export const publicRequest = axios.create({
    baseURL:BASE_URL
});