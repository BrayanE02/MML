import "bootstrap"
function Card() {
  return (
    <>
    <div className="card" style={{ width: "18rem" }}>
      <img src="https://m.media-amazon.com/images/M/MV5BOTI0MzcxMTYtZDVkMy00NjY1LTgyMTYtZmUxN2M3NmQ2NWJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Goodwill Hunting</h5>
        <p className="card-text">
          1997
        </p>
      </div>
    </div>
    </>
  );
}

export default Card;
