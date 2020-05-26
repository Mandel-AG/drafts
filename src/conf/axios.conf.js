import * as axios from 'axios';

// axios.defaults.headers.post['test'] = '435';


const apiMovie = axios.create({
  baseURL: 'https://api.themoviedb.org/4'
})

apiMovie.interceptors.request.use( req => {
  req.headers['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYWFiZDZmNDFiZDBkOTliOTZkYTYxMjZkYTRhMjEwNSIsInN1YiI6IjVlNDMyY2MwNDE0NjVjMDAxNmQwMDNmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.X6xAEcJJpdaU1PI1Vxhw9Ksq9NJ-UGXZ0aU2kaYSpng'
  return req;
})

export default apiMovie;