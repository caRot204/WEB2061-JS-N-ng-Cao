import axios from "axios";
const apiAxios = axios.create({
    baseURL: 'https://6295d089810c00c1cb6851e2.mockapi.io//'
});

export default apiAxios;