import moviep from "../assets/dune2.png";
import { useState } from "react";
import "../css/AddToListPage.css";

export default function AddToListPage() {
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
        <img className="movie-image" src={moviep} alt="Dune2" />
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
          <button className="btn" type="submit">Add To List</button>
        </div>
      </div>
    </>
  );
}