import axios from 'axios';

export const axiosClient = axios.create({
    baseURL: 'https://api.api-ninjas.com/v1',
    headers: {
        'X-Api-Key': '8DX8eEe67njS1lbThFsdSw==rQQNpQ8PYbPZBjrx'
    }
});
