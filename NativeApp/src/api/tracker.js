import axios from 'axios';
import { AsyncStorage } from 'react-native';

const instance = axios.create({
    //ngrok url provided by running 'ngrok http <portNumberOfAPIInstance>' from separate terminal window
    // baseURL: 'http://5b7d1f0a.ngrok.io'

    //AWS istance
    baseURL: 'ec2-18-222-134-134.us-east-2.compute.amazonaws.com'
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