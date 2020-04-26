import axios from 'axios'


const appService = {
    getPopularMovies () {
      return new Promise(resolve => {
        axios
          .get(`https://api.themoviedb.org/3/movie/popular?api_key=f16a94a392138ff37753fb6821113944`)
          .then(response => {
            resolve(response.data)
          })
      })
    },
  }
  
  export default appService