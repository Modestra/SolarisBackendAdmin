import axios from "axios"
export const HTTP = () => {
    return axios.create({
        //baseURL: "http://45.147.178.196:8000/"
        baseURL: "http://127.0.0.1:8000/"
    })
}