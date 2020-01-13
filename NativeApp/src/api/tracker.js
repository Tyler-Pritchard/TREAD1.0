import axios from 'axios';

export default axios.create({
    //ngrok url provided by running 'ngrok http <portNumberOfAPIInstance>' from separate terminal window

    baseURL: 'http://3d66c063.ngrok.io'

})