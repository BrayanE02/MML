

export default function OneMovie(props) {
  //we have to define a base object because if it undefined we get an error
  let movie={
    id: 0,
    original_title: "Error: No Movie found",
    poster_path: "/sJA8Nnnj547WTFwqHYNu0Y8BxHM.jpg",
    genre_ids: [],
    release_date: "NA",
    vote_average: 0,
    overview: "Please try to select another movie by navigatin back to the page you where previously on, in the mean time enjoy Kung fo Panda 4"
  }
  //if our movie is not undefined
  if(props.movie){
    movie = props.movie;

  }
  return (
    <>
      <h1 className="movie-title">{movie.original_title}</h1>
      <div className="movie-container">
        <img className="movie-image" src={"https://image.tmdb.org/t/p/w300/" + movie.poster_path} alt={movie.original_title} />
        <div className="movie-details">
          <h2>Genre</h2>
          <p>{movie.genre_ids}</p>
          <h2>Release Date</h2>
          <p>{movie.release_date}</p>
          <h2>Rating</h2>
          <p>{movie.vote_average}</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <a href="/AddToList">
            <button className="btn-list">Add To List</button>
          </a>
        </div>
      </div>
    </>
  );
}