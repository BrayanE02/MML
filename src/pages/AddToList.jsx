import { useState } from "react";
import "../css/AddToList.css";
import * as UserDAO from "../services/UsersService"
import { useNavigate } from "react-router-dom";


export default function AddToList(props) {

  var User = props.user;
  const navigate = useNavigate();
  //we have to define a base object because if it undefined we get an error
  let movie = {
    id: 0,
    original_title: "Error: No Movie found",
    poster_path: "/sJA8Nnnj547WTFwqHYNu0Y8BxHM.jpg",
    genre_ids: [],
    release_date: "NA",
    vote_average: 0,
    overview:
      "Please try to select another movie by navigatin back to the page you where previously on, in the mean time enjoy Kung fo Panda 4",
  };

  //if our movie is not undefined
  if (props.movie) {
    movie = props.movie;
  }

  const [rating, setRating] = useState(1); // Initial rating

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value));
  };

  // check box
  const [isOnToWatchList, setOnToWatchList] = useState(false); // set to false

  const handleChange = (event) => {
    setOnToWatchList(event.target.checked);
  };

  // Handle Add To List
  const handleAddToList = async (event) => {
    var watched = 1;
    event.preventDefault();
    // make sure to handle user input
    if (isOnToWatchList == true){
      watched = 0;
    }
    await UserDAO.addToList(User.ID, movie.id, rating, watched)
    console.log(
      "id:  " +
        User.ID +
        " title: " +
        movie.original_title +
        " genre: " +
        movie.genre_ids +
        "release_date " +
        movie.release_date +
        " " +
        rating
    );
    navigate('/')
  };

  return (
    <>
      <h1 className="ptitle">Add To List</h1>
      <br/>
      <form onSubmit={handleAddToList}>
        <div className="movie-container">
          <img
            className="movie-image"
            src={"https://image.tmdb.org/t/p/w300/" + movie.poster_path}
            alt={movie.original_title}
          />
          <div className="movie-details">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={isOnToWatchList}
                onChange={handleChange}
              />
              Put on to watch list?
            </label>
            <br/>
            <div
              style={{ display: isOnToWatchList ? "none" : "block" }}
              className="rating"
            >
              <p className="ratingp">Your Rating</p>
              <select value={isOnToWatchList ? undefined : rating} onChange={handleRatingChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
            <br/>
            <button className="addbtn" type="submit">
              Add To List
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
