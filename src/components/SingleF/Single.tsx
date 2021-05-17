import React, { useEffect, useState } from "react";
import { API_KEY } from "../../api/Request";
import { SingleContainer, SingleFilm, SingleSimilar } from "./Single.styles";
import axios from "../../api";
import { useLocation, useParams } from "react-router";
import Rating from "../Rating";
import Slide from "../Slider/Slider";
import Review from "./Review";
import SingleSkeleton from "../Skeleton/SingleSkeleton";

const Single = () => {
  //@ts-expect-error
  let { id } = useParams();
  const [movieDetail, setMovieDetail] = useState<any>({});
  const [reviews, setReviews] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [similarMovies, setSimilarMovies] = useState<any>({});
  const getGenre = (arr: Array<{ id: number; name: string }>) => {
    let string: string = "";
    if (arr?.length > 0) {
      for (let i = 0; i < arr?.length; i++) {
        string += ` ${arr[i]["name"]} `;
      }
    }
    return string;
  };
  const TV = useLocation().pathname.includes("TV");
  useEffect(() => {
    async function getResult() {
      const result = await axios.get(
        `/${TV ? "tv" : "movie"}/${id}?api_key=${API_KEY}&language=en-US`
      );
      return result;
    }
    async function getReviews() {
      const result = await axios.get(
        `/${
          TV ? "tv" : "movie"
        }/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
      );
      return result;
    }
    async function getSimilarMovies() {
      const result = await axios.get(
        `/${
          TV ? "tv" : "movie"
        }/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`
      );
      return result;
    }
    async function getAll() {
      let res = null;
      try {
        setLoading(true);
        res = await Promise.all([
          getResult(),
          getReviews(),
          getSimilarMovies(),
        ]);
        setMovieDetail(res[0].data);
        setReviews(res[1].data.results);
        setSimilarMovies(res[2].data.results);
        setLoading(false);
      } catch (err) {
        console.log("Fail >>", err);
      }
    }
    getAll();
    window.scrollTo(0, 0);
  }, [id]);
  return (
    <>
      {movieDetail && (
        <SingleFilm
          image={`https://image.tmdb.org/t/p/original/${movieDetail.backdrop_path}`}
        >
          {loading ? (
            <SingleSkeleton />
          ) : (
            <SingleContainer>
              <div className="single__detail">
                <div className="single__left">
                  <img
                    src={`https://image.tmdb.org/t/p/original/${movieDetail.poster_path}`}
                    alt={movieDetail.id}
                  />
                </div>
                <div className="single__right">
                  <h4>
                    {movieDetail.title ||
                      movieDetail.original_title ||
                      movieDetail.name}
                    <span>({movieDetail.release_date})</span>
                  </h4>
                  <p className="genre">
                    Genres: {getGenre(movieDetail?.genres)}
                  </p>
                  <Rating rating={movieDetail.vote_average} />
                  <p className="overview">{movieDetail.overview}</p>
                </div>
              </div>
              <hr />
              {reviews && (
                <div className="single__review">
                  <h2>Reviews:</h2>
                  {reviews.length > 0 &&
                    reviews.map((review: any) => (
                      <>
                        <Review review={review} />
                      </>
                    ))}
                </div>
              )}
            </SingleContainer>
          )}

          <SingleSimilar>
            <h3>Another similar movies:</h3>
            <Slide arrItems={similarMovies} slideNo={5} />
          </SingleSimilar>
        </SingleFilm>
      )}
    </>
  );
};

export default Single;
