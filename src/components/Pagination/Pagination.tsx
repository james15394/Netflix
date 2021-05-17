import React, { useEffect, useState } from "react";
import { PaginationContainer, PaginationWrapper } from "./Pagination.styles";

interface Props {
  pageNo: number;
  setPageNo: any;
  genre?: string;
}
const Pagination: React.FC<Props> = ({ pageNo, setPageNo, genre }) => {
  const [maxPageNo, setMaxPageNo] = useState(10);
  const [minPageNo, setMinPageNo] = useState(1);
  let pageNum: number[] = [];
  for (let i: number = 1; i < Math.ceil(1000 / 10); i++) {
    pageNum.push(i);
  }
  const handleClickPageNo = (e: any) => {
    setPageNo(+e.target.id);
  };
  const handleNextBtn = () => {
    setPageNo(pageNo + 1);
    if (pageNo + 1 > maxPageNo) {
      setMaxPageNo(maxPageNo + 10);
      setMinPageNo(minPageNo + 10);
    }
  };
  const handlePrevBtn = () => {
    setPageNo(pageNo - 1);
    if (pageNo - 1 < minPageNo) {
      setMaxPageNo(maxPageNo - 10);
      setMinPageNo(minPageNo - 10);
    }
  };
  useEffect(() => {
    setMaxPageNo(10);
    setMinPageNo(1);
  }, [genre]);
  return (
    <PaginationContainer>
      <PaginationWrapper>
        <button onClick={handlePrevBtn} disabled={pageNo === 1} className="btn">
          <i className="fas fa-chevron-circle-left"></i>
        </button>
        <div className="pageNo">
          <ul>
            {pageNum.map((el) => {
              {
                if (el < maxPageNo + 1 && el > minPageNo - 1) {
                  return (
                    <li
                      onClick={handleClickPageNo}
                      id={`${el}`}
                      key={el}
                      className={pageNo === el ? "active" : undefined}
                    >
                      {el}
                    </li>
                  );
                } else return null;
              }
            })}
          </ul>
        </div>
        <button
          onClick={handleNextBtn}
          disabled={pageNo === 1000}
          className="btn"
        >
          <i className="fas fa-chevron-circle-right"></i>
        </button>
      </PaginationWrapper>
    </PaginationContainer>
  );
};

export default Pagination;
