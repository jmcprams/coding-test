const axios = require('axios')

/**
 * Creates an instance of axios with the fake store API
 * base URL. This will prevent us from repeating the same 
 * format/syntax of a request in its API.
 * 
 * @return {AxiosInstance}
 */
module.exports = axios.create({
    baseURL: 'https://fakestoreapi.com',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})