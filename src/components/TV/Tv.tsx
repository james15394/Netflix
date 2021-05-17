import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import axios from "../../api/index";
import { API_KEY } from "../../api/Request";
import Rating from "../Rating";
import { TvContainer, TvItem, TvWrapper } from "./Tv.Styles";
import Pagination from "../Pagination/Pagination";
import TvSkeleton from "../Skeleton/TvSkeleton";

const Tv = () => {
  const history = useHistory();
  const [pageNo, setPageNo] = useState<number>(1);
  const [TvList, setTvList] = useState<any>({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const url = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=${pageNo}&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate`;
    async function getTvList() {
      setLoading(true);
      const results = await axios.get(url);
      setTvList(results.data.results);
      setLoading(false);
    }
    getTvList();
    window.scrollTo(0, 0);
  }, [pageNo]);
  return (
    <>
      <TvContainer>
        {loading ? (
          <TvSkeleton />
        ) : (
          <TvWrapper>
            <h3>TV List</h3>
            <div className="wrapper">
              {TvList.length > 1 &&
                TvList.map((item: any) => (
                  <TvItem>
                    <div className="img">
                      <img
                        src={`https://image.tmdb.org/t/p/original/${item?.poster_path}`}
                        alt={item.name}
                      />
                    </div>
                    <h4 onClick={() => history.push(`/TV/list/${item.id}`)}>
                      {item.name || item.original_name}
                    </h4>
                    <Rating rating={item?.vote_average} />
                  </TvItem>
                ))}
            </div>
          </TvWrapper>
        )}

        <Pagination pageNo={pageNo} setPageNo={setPageNo} />
      </TvContainer>
    </>
  );
};

export default Tv;
