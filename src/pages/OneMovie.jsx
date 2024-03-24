import moviep from "../assets/dune2.png";

import "../css/OneMoviePage.css";

export default function OneMovie(props) {
  var movie = props.movie;
  return (
    <>
      <h1 className="movie-title">{movie.original_title}</h1>
      <div className="movie-container">
        <img className="movie-image" src={moviep} alt="Dune2" />
        <div className="movie-details">
          <h2>Genre</h2>
          <p>{movie.genre}</p>
          <h2>Release Date</h2>
          <p>{movie.release_date}</p>
          <h2>Rating</h2>
          <p>{movie.rating}</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <a href="/AddToListPage">
            <button className="btn">Add To List</button>
          </a>
        </div>
      </div>
    </>
  );
}