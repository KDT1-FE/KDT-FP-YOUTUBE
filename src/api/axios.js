import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3',
  params: {
    key: 'AIzaSyD9RAFxyPntMt3gzdfcJbX8xllDieEHd-E',
  },
});

export default instance;
