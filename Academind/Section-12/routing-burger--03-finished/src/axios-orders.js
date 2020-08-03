import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-ac2ae.firebaseio.com/'
});

export default instance;