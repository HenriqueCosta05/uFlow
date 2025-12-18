import axios from 'axios'

export const mockAPI = axios.create({
    baseURL: '/',
    headers: {
        'Content-Type': 'application/json',
    },
})
