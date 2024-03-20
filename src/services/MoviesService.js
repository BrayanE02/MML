import MovieDataService from "./MovieDataService";

// This class handles the API calls for TMDB

// gets one movie by ID
export async function getOneMovieById(ID){
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZGE0OGI3OGNjNjg2Mjc4M2IwOTljZjM4NTZhNWVmYyIsInN1YiI6IjY1OWMzMTQyMWQxYmY0NGJjYjlhZjFiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lf4D-yEESLD5dKU5H55ghAsClMPo1gsr6QpKTB0EpXI'
        }
      };
      
    try {
        const response = await MovieDataService.get(`https://api.themoviedb.org/3/movie/${ID}?language=en-US`, options);
        const movieData = response.data;
        console.log("Responce:", movieData)
        return movieData;
    } 
    catch (err) {
        console.error(err);
    }
}


