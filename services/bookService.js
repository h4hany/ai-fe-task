import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000";

export const fetchBookAnalysis = async (slug) => {
    try {
        const response = await axios.get(`${BASE_URL}/books/${slug}/analysis`);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || error.message);
    }
};

export const searchBook = async (id) => {
    try {
        const response = await axios.post(`${BASE_URL}/books`, {gutenberg_id: id});
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || error.message);
    }
};


export const listBook = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/books`);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || error.message);
    }
};
