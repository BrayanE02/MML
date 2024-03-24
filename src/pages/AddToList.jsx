import { useState } from "react";
import "../css/AddToList.css";

export default function AddToList(props) {
  var movie = props.movie;
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const [rating, setRating] = useState(1); // Initial rating

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value));
  };

  return (
    <>
      <h1 className="ptitle">Add To List</h1>
      <div className="movie-container">
      <img className="movie-image" src={"https://image.tmdb.org/t/p/w300/" + movie.poster_path} alt={movie.original_title} />
        <div className="movie-details">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleChange}
            />
              Put on to watch list?
          </label>
          <div className="rating">
          <p className="ratingp">Your Rating</p>
          <select value={rating} onChange={handleRatingChange}>
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
          <button className="btn-list" type="submit">Add To List</button>
        </div>
      </div>
    </>
  );
}