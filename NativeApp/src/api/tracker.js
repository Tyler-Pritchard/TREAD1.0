import axios from 'axios';

export default axios.create({
    //ngrok url provided by running 'ngrok http <portNumberOfAPIInstance>' from separate terminal window

    baseURL: 'http://0ba966cb.ngrok.io'

})