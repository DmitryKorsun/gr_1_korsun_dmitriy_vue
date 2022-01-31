import axios from "axios";

export const MovieBase = type => {
    return axios.create({
        baseUrl:`http://www.omdbapi.com/?apikey=2f027767&${type}`
    })
}