import { useState, useEffect } from "react";
import movieService from "../movieService/index";

export default function MovieDetails(props) {
  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    props.id &&
      movieService.getMovie(props.id).then((res) => {
        setMovieData(res.data);
      });
  }, []);

  return (
    <div id="ctn" className="container">
      <h3 className="">Movie Details</h3>
      <section id="aboutCont" className="py-6 border-top border-bottom rounded">
        <div className="row">
          <div class="col-6 my-auto">
            <img
              className="movie-detail rounded"
              src={`https://www.themoviedb.org/t/p/original/${movieData.poster_path}`}
              alt="movie-img"
            />
          </div>
          <div className="col-6 my-auto">
            <h4 className="movieDetailsSubTitle">
              {movieData?.original_title}
            </h4>
            <h5 className="movieDetailsSubTitle">Summary:</h5>
            <p>{movieData?.overview}</p>
            <h5 className="movieDetailsSubTitle">Genres:</h5>
            <p>
              {movieData?.genres?.map((item) => {
                return item.name + " ";
              })}
            </p>
            <h5 className="movieDetailsSubTitle">Production:</h5>
            <p>
              {movieData?.production_companies?.map((item) => {
                return item.name + " ";
              })}
            </p>
            <h5 className="movieDetailsSubTitle">Release Date:</h5>
            <p>{movieData?.release_date}</p>
            <h5 className="movieDetailsSubTitle">Rating:</h5>
            <p>{Math.floor(movieData?.vote_average * 10) / 10}/10</p>
          </div>
        </div>
      </section>
    </div>
  );
}
