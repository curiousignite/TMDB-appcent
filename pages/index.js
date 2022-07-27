import Layout from "../components/Layout";
import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import movieService from "../movieService/index";
import Jumbotron from "../components/Jumbotron";

export default function Home() {
  const [trendingData, setTrandingData] = useState([]);

  useEffect(() => {
    movieService.getTrending().then((res) => {
      setTrandingData(res.data.results);
    });
  }, []);

  return (
    <Layout>
      <head>
        <title>TMDB | Home</title>
      </head>
      <Jumbotron></Jumbotron>
      <h3 className="container">Popular Movies of the Week</h3>
      <div class="row">
        {trendingData?.slice(0, 24).map((item) => {
          return <MovieCard movieData={item} />;
        })}
      </div>
    </Layout>
  );
}
