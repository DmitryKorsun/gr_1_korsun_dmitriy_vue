import axios from "axios";

export const MoviesDataBase = (type) => {
    return axios.create({
        baseURL: `https://www.omdbapi.com/?apikey=2f027767&${type}`,
        method: 'GET',
    });
};