import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000";
import qs from "qs";

export const login = async (username,
                            password,) => {
    try {
        const formData = qs.stringify({
            username,
            password,
        });
        const response = await axios.post(`${BASE_URL}/login`, formData);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || error.message);
    }
};

