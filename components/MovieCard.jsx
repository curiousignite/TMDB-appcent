export default function MovieCard({ movieData }) {
  return (
    <>
      <div className="col-md-3 mt-3">
        <div className="card">
          <img
            className="card-img-top"
            src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movieData.poster_path}`}
            alt="card-img"
          />
          <div className="card-body">
            <h5 className="card-title">{movieData.original_title}</h5>
            <h5 className="movieDetailsSubTitle">Release Date:</h5>
            <p className="card-text">{movieData.release_date}</p>
            <h5 className="movieDetailsSubTitle">Rating:</h5>
            <p className="card-text">
              {Math.floor(movieData?.vote_average * 10) / 10}/10
            </p>
            <a href={`/movieDetail/${movieData.id}`} className="btn" target="#">
              Details
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
