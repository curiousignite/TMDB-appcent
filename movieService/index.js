import axios from 'axios'

class movieService {
  apikey;
  constructor() {
    this.apikey = '7c74e0645f3123c70e6539f7d4c4aa7b';
  }
  getMovie(id) {
    return axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.apikey}`)
  }
  getTrending() {
    return axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${this.apikey}`);
  }
}

export default new movieService()