import "bootstrap"
import "../css/Card.css"
//the props paramiter is be the json for a movie

function Card(props) {
  var ourMovie = props.movie;
  return (
    <>
    <div className="card" style={{ width: "15rem", height: "10rem"}}>
      <img src={"https://image.tmdb.org/t/p/w300/" + ourMovie.poster_path} className="card-img-top" alt={ourMovie.original_title + " poster"} />
      <div className="card-body">
        <h5 className="card-title">{ourMovie.original_title}</h5>
        <p className="card-text">
          {ourMovie.release_date}
        </p>
      </div>
    </div>

    </>
  );
}

export default Card;
