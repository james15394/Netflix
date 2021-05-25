import React, { useEffect, useState } from "react";
import { HeroWrapper } from "./Hero.styled";
import axios from "../../api";
import requests from "../../api/Request";
import Rating from "../Rating";
import { getGenre } from "../utils";
import HomeSkeleton from "../Skeleton/HeroSkeleton";

const Hero = () => {
  const [movie, setMovie] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [genres, setGenres] = useState<any>([]);
  function formatNumber(num: number) {
    return num?.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const request = await axios.get(requests.fetchNetflixOriginals);
      const requestGenres = await axios.get(requests.fetchGenres);
      setGenres(requestGenres.data.genres);
      const randomNum = Math.floor(
        Math.random() * request.data.results.length - 1
      );
      setMovie(request.data.results[randomNum]);
      setLoading(false);
      return request;
    }
    fetchData();
  }, []);
  return (
    <>
      {loading ? (
        <HomeSkeleton />
      ) : (
        <HeroWrapper image={movie?.backdrop_path}>
          <div className="hero__wrapper">
            <div className="hero__container">
              <h4>Today's featured film</h4>
              <h2>
                {movie?.name || movie?.original_name}
                <span>({movie?.first_air_date?.split("-")[0]})</span>
              </h2>
              <div className="genre">
                <span>
                  <i className="fas fa-tags"></i>
                </span>
                {getGenre(movie?.genre_ids, genres)}
              </div>
              <p>{movie?.overview}</p>
              <Rating rating={movie?.vote_average} />{" "}
              <span>
                {" "}
                {(movie?.vote_average * 5) / 10} (
                {formatNumber(movie?.vote_count)})
              </span>
              <button>Play trailer</button>
            </div>
          </div>
          <div className="banner"></div>
        </HeroWrapper>
      )}
    </>
  );
};

export default Hero;
