import axios from 'axios';

export default axios.create({
    //ngrok url provided by running 'ngrok http <portNumberOfAPIInstance>' from separate terminal window

    baseURL: 'http://bb324840.ngrok.io'

})