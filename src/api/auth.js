import axiosInstance from "./axiosInstance";
import API from "../constants/endpoints.js"

export const login = async (username, password) => {
    const data = await axiosInstance.post(API.AUTH.LOGIN, {
        username,
        password
    })
    return data;
}