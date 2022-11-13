import axios from "axios";

const { REACT_APP_BASE_URL } = process.env;

const instance = axios.create({
    baseURL: REACT_APP_BASE_URL,
});
instance.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) config.headers["Authorization"] = `Bearer ${token}`;
    config.headers["Accept"] = config.headers["Accept"] ? config.headers["Accept"] : "application/json";
    config.headers["X-Requested-With"] = "XMLHttpRequest";
    return config;
});

export default instance;
