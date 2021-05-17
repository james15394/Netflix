import React, { useEffect, useState } from "react";
import { MovieContainer, MovieWrapper } from "./Movie.styles";
import axios from "../../api/index";
import requests from "../../api/Request";
import { useHistory } from "react-router";
import Rating from "../Rating";
import Pagination from "../Pagination/Pagination";
import MovieSkeleton from "../Skeleton/MovieSkeleton";

const Movie = () => {
  const history = useHistory();
  const [movieList, setMovieList] = useState<any>({});
  const [pageNo, setPageNo] = useState<number>(1);
  const [genre, setGenre] = useState<string>("action");
  const [loading, setLoading] = useState(false);
  let url: string;
  if (genre === "action") url = `${requests.fetchActionMovies}&page=${pageNo}`;
  if (genre === "comedy") url = `${requests.fetchComedyMovies}&page=${pageNo}`;
  if (genre === "horror") url = `${requests.fetchHorrorMovies}&page=${pageNo}`;
  if (genre === "romance")
    url = `${requests.fetchRomanceMovies}&page=${pageNo}`;
  if (genre === "documentary")
    url = `${requests.fetchDocumentaries}&page=${pageNo}`;
  useEffect(() => {
    async function getResults() {
      setLoading(true);
      const results = await axios.get(url);
      setMovieList(results.data.results);
      setLoading(false);
    }
    getResults();
    window.scroll(0, 0);
  }, [genre, pageNo]);
  useEffect(() => {
    setPageNo(1);
  }, [genre]);
  return (
    <MovieContainer>
      <MovieWrapper>
        <div className="movie__genre">
          <button
            onClick={() => setGenre("action")}
            className={genre === "action" ? "active" : undefined}
          >
            Action
          </button>
          <button
            onClick={() => setGenre("comedy")}
            className={genre === "comedy" ? "active" : undefined}
          >
            Comedy
          </button>
          <button
            onClick={() => setGenre("horror")}
            className={genre === "horror" ? "active" : undefined}
          >
            Horror
          </button>
          <button
            onClick={() => setGenre("romance")}
            className={genre === "romance" ? "active" : undefined}
          >
            Romance
          </button>
          <button
            onClick={() => setGenre("documentary")}
            className={genre === "documentary" ? "active" : undefined}
          >
            Documentaries
          </button>
        </div>
        {loading ? (
          <MovieSkeleton />
        ) : (
          <div className="wrap">
            {movieList.length > 0 &&
              movieList.map((item: any) => (
                <div className="movie__item">
                  <div className="img">
                    <img
                      src={`https://image.tmdb.org/t/p/original/${
                        item?.poster_path
                          ? item?.poster_path
                          : item?.backdrop_path
                      }`}
                      alt={
                        item.name ||
                        item.original_name ||
                        item.title ||
                        item.original_title
                      }
                    />
                  </div>
                  <h4 onClick={() => history.push(`/movie/${item.id}`)}>
                    {item.name ||
                      item.original_name ||
                      item.title ||
                      item.original_title}
                  </h4>
                  <Rating rating={item?.vote_average} />
                </div>
              ))}
          </div>
        )}
        <Pagination pageNo={pageNo} setPageNo={setPageNo} genre={genre} />
      </MovieWrapper>
    </MovieContainer>
  );
};

export default Movie;
