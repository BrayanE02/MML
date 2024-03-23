import MovieDataService from "./MovieDataService";

// This class handles the API calls for TMDB

// gets one movie by ID
export async function getOneMovieById(ID){
    //header of request
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZGE0OGI3OGNjNjg2Mjc4M2IwOTljZjM4NTZhNWVmYyIsInN1YiI6IjY1OWMzMTQyMWQxYmY0NGJjYjlhZjFiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lf4D-yEESLD5dKU5H55ghAsClMPo1gsr6QpKTB0EpXI'
        }
      };
    //url of request
    var url = `movie/${ID}?language=en-US`;
    //try the request
    try {
        const response = await MovieDataService.get(url, options);
        const movieData = response.data;
        console.log("Responce:", movieData)
        return movieData;
    } 
    catch (err) {
        console.error(err);
    }
}

// gets the top movies any genera
export async function getTopNewMovies(){
    //header of request
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZGE0OGI3OGNjNjg2Mjc4M2IwOTljZjM4NTZhNWVmYyIsInN1YiI6IjY1OWMzMTQyMWQxYmY0NGJjYjlhZjFiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lf4D-yEESLD5dKU5H55ghAsClMPo1gsr6QpKTB0EpXI'
        }
      };
    //URL of request
    var url = "discover/movie?page=1&language=en-US&include_video=false&sort_by=popularity.desc&primary_release_year=2024"
    
    //try the request
    try {
        const response = await MovieDataService.get(url, options);
        const movieData = response.data;
        console.log("Responce:", movieData)
        return movieData;
    } 
    catch (err) {
        console.error(err);
    }
}

// gets top comedy movies
export async function getTopComedyMovies(){
    //header of request
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZGE0OGI3OGNjNjg2Mjc4M2IwOTljZjM4NTZhNWVmYyIsInN1YiI6IjY1OWMzMTQyMWQxYmY0NGJjYjlhZjFiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lf4D-yEESLD5dKU5H55ghAsClMPo1gsr6QpKTB0EpXI'
        }
      };
    //URL of request
    var url = "discover/movie?page=1&language=en-US&include_video=false&sort_by=popularity.desc&include_adult=false&with_genres=35"
    //try the request
    try {
        const response = await MovieDataService.get(url, options);
        const movieData = response.data;
        console.log("Responce:", movieData)
        return movieData;
    } 
    catch (err) {
        console.error(err);
    }
}

// gets top comedy movies
export async function getTopMoviesAllTime(){
  //header of request
  const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZGE0OGI3OGNjNjg2Mjc4M2IwOTljZjM4NTZhNWVmYyIsInN1YiI6IjY1OWMzMTQyMWQxYmY0NGJjYjlhZjFiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lf4D-yEESLD5dKU5H55ghAsClMPo1gsr6QpKTB0EpXI'
      }
    };
  //URL of request
  var url = "movie/top_rated?page=1"
  
  //try the request
  try {
      const response = await MovieDataService.get(url, options);
      const movieData = response.data;
      console.log("Responce:", movieData)
      return movieData;
  } 
  catch (err) {
      console.error(err);
  }
}