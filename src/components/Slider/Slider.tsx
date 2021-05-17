import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { shortTitle } from "../utils";
import { Item, Wrapper } from "./Slider.styles";
import Rating from "../Rating";
import { useHistory, useLocation } from "react-router";

interface Props {
  arrItems: Array<any>;
  slideNo: number;
}

const Slide: React.FC<Props> = ({ arrItems, slideNo }) => {
  const history = useHistory();
  const TV = useLocation().pathname.includes("TV");
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: slideNo,
    slidesToScroll: 3,
  };
  const handleGetSingle = (id: number) => {
    history.push(`/${TV ? "TV/list" : "movie"}/${id}`);
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        {arrItems.length > 1 &&
          arrItems.map((el: any) => (
            <Item>
              <img
                src={`https://image.tmdb.org/t/p/original/${el.poster_path}`}
                alt=""
              />
              <h4>
                {shortTitle(el?.title || el?.original_title || el?.name, 20) +
                  "..."}
              </h4>
              <div className="movie__detail">
                <h5>
                  {shortTitle(el?.title || el?.original_title || el?.name, 20) +
                    "..."}
                </h5>
                <p>{shortTitle(el?.overview, 30) + "..."}</p>
                <Rating rating={el?.vote_average} />
                <button onClick={() => handleGetSingle(el.id)}>View</button>
              </div>
            </Item>
          ))}
      </Slider>
    </Wrapper>
  );
};

export default Slide;
