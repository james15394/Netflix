import React, { useEffect, useState } from "react";
import { RowWrapper } from "./Row.styles";
import axios from "../../api";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide from "../Slider/Slider";

const Row = (props: { name: string; data: string; large: boolean }) => {
  const [movie, setMovie] = useState<any>({});
  const { name, data, large } = props;
  const slide = large ? 8 : 5;

  useEffect(() => {
    async function getData() {
      const request = await axios.get(data);
      setMovie(request.data.results);
    }
    getData();
  }, [data]);
  return (
    <RowWrapper>
      <div className="row__wrapper">
        <h3>{name}</h3>
        <Slide arrItems={movie} slideNo={slide} />
      </div>
    </RowWrapper>
  );
};

export default Row;
