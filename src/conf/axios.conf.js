import * as axios from 'axios';

// axios.defaults.headers.post['test'] = '435';


const apiMovie = axios.create({
  baseURL: 'https://api.themoviedb.org/4'
})

apiMovie.interceptors.request.use( req => {
  req.headers['Authorization'] = `Bearer ${process.env.REACT_APP_TOKEN}`;
  return req;
})

export default apiMovie;