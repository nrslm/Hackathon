import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchData = createAsyncThunk('data/fetchData', async (apiEndpoint) => {
    try {
        const response = await axios.get(apiEndpoint, {
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Token ea1c9688050092767ff6d595359a4c60c2628f0b`
            }
        });
        return response.data
    } catch (error) {
        throw error;
    }
});
export const register = createAsyncThunk('register/fetchData', async (apiEndpoint) => {
    try {
        const response = await axios.get(apiEndpoint, {
            headers: {
                'Content-Type': 'application/json',
            },
            params: {
                "first_name": "string",
                "last_name": "string",
                "password": "string",
                "phone": "string",
                "email": "user@example.com"
            }
        });
        return response.data
    } catch (error) {
        throw error;
    }
});
console.log(fetchData)
