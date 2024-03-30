import { useState } from "react";
import "../css/AddToList.css";

export default function AddToList(props) {
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

  const [isChecked, setIsChecked] = useState(false); // set to false

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const [rating, setRating] = useState(1); // Initial rating

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value));
  };

  // Handle Add To List
  const handleAddToList = async (event) => {
    event.preventDefault();
    // test to see if everything that is needed is filled out
    // check if rating is required
    if (isChecked) {
      setRating('');
    }
    console.log(
      "id: " +
        movie.id +
        " title: " +
        movie.original_title +
        " genre: " +
        movie.genre_ids +
        "release_date " +
        movie.release_date +
        " " +
        rating
    );
  };

  return (
    <>
      <h1 className="ptitle">Add To List</h1>
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
                checked={isChecked}
                onChange={handleChange}
              />
              Put on to watch list?
            </label>
            <div
              style={{ display: isChecked ? "none" : "block" }}
              className="rating"
            >
              <p className="ratingp">Your Rating</p>
              <select value={isChecked ? undefined : rating} onChange={handleRatingChange}>
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
            <button className="btn-list" type="submit">
              Add To List
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
