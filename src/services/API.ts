import axios from 'axios'

export const uFlowAPI = axios.create({
    baseURL: '/',
    headers: {
        'Content-Type': 'application/json',
    },
})
