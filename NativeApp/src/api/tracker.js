import axios from 'axios';
import { AsyncStorage } from 'react-native';

const instance = axios.create({
    //ngrok url provided by running 'ngrok http <portNumberOfAPIInstance>' from separate terminal window
    baseURL: 'http://8f6c2b46.ngrok.io'
});

instance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

export default instance;