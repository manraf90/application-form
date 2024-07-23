import axios from 'axios';
import { axiosClient } from '../axiosClient';
import { ApplicationRequestBody } from './FormPage.type';

export const getPolandHolidays = async () => {
    const { data } = await axiosClient.get(
        `https://api.api-ninjas.com/v1/holidays?country=PL&year=2024`
    );

    return data;
};

export const sendApplicationData = async (body: ApplicationRequestBody) => {
    const { data } = await axios.post('http://letsworkout.pl/submit', body);

    return data;
};
