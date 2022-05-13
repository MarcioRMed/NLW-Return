// ipconfig windows acessar o ip da máquina
// 192.168.0.11

import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://192.168.0.11:3333'
})