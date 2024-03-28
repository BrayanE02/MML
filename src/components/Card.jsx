import "bootstrap"
import "../css/Card.css"
import { useNavigate } from 'react-router-dom';

//the props paramiter is be the json for a movie
function Card(props) {
  const navigate = useNavigate();
  var ourMovie = props.movie;
    const handleClick = () => {
      props.setOneMovieIDFunc(props.movie)
      navigate('/OneMovie')
    };
    const handleRemove = () => {
      console.log(ourMovie.id)
    };
  

  var isList = false;
  if(props.user != undefined){
    isList = true;
  }

  return (
    <>
    {!isList ? 
    // This is for our card with no buttons that takes you to the one movie page with a click anywhere
      <div className="card" onClick={handleClick} style={{ width: "10rem", height: "21rem", cursor: "pointer" }}>
          <img src={"https://image.tmdb.org/t/p/w300/" + ourMovie.poster_path} className="card-img-top" alt={ourMovie.original_title + " poster"} />
          <div className="card-body">
            <h5 className="card-title">{ourMovie.original_title}</h5>
            <p className="card-text">
              {ourMovie.release_date} 
            </p>
          </div> 
      </div>
      :
      //This is for our card with a remove and add button
      <div className="card" style={{ width: "10rem", height: "23rem", cursor: "pointer" }}>
          <img src={"https://image.tmdb.org/t/p/w300/" + ourMovie.poster_path} className="card-img-top" alt={ourMovie.original_title + " poster"} />
          <div className="card-body">
            <h5 className="card-title">{ourMovie.original_title}</h5>
            <p className="card-text">
              {ourMovie.release_date} 
            </p>
            <div className="button-container">
              <button type="submit" className="btn btn-primary btn-myList" onClick={handleClick}>View</button>
              <button type="submit" className="btn btn-danger btn-myList" onClick={handleRemove}>Remove</button>
            </div>
          </div> 
      </div>
    }
    </>
  );
}

export default Card;
