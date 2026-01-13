import axios from "axios";

const apikey = 'OVyXC0RkOlfQqG9wSdXJZVIHFUrrSVSh';

const giphyAPI = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apikey,
    }
});

//export default giphyAPI;

giphyAPI.get('/random')
    .then(resp => console.log(resp))
    .catch(err => console.log(err));