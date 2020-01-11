import axios from 'axios';

export default axios.create({
    //ngrok url provided by running 'ngrok http <portNumberOfAPIInstance>' from separate terminal window
    baseURL: 'http://5bf23f84.ngrok.io'
})