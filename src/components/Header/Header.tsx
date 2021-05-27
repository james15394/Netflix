import React, { useCallback, useEffect, useState } from "react";
import { HeaderWrapper } from "./Header.styles";
import { HeaderLeft } from "./Header.styles";
import { HeaderRight } from "./Header.styles";
import { HeaderContainer } from "./Header.styles";
import axios from "../../api";
import { API_KEY } from "../../api/Request";
import debounce from "lodash.debounce";
import { auth } from "../../firebase";
import { history } from "../../App2";
import { useForm } from "react-hook-form";

type FormValues = {
  search: string;
};

const Header = (props: { setSearchResult: any }) => {
  const [openSearch, setOpenSearch] = useState(false);
  const { setSearchResult } = props;
  const [navScroll, setNavScroll] = useState(false);

  const changeNav = () => {
    window.scrollY > 0 ? setNavScroll(true) : setNavScroll(false);
  };
  
  const handleLogOut = () => {
    auth.signOut();
    history.push("/seen");
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
    return () => {
      window.removeEventListener("scroll", changeNav);
    };
  }, []);
    const { register, handleSubmit, setFocus, setValue } = useForm<FormValues>();
  const onSubmit = async (data: FormValues) => {
    const key = data.search;
    const result = await axios.get(
      `/search/multi?api_key=${API_KEY}&language=en-US&query=${key}&page=1&include_adult=false`
    );
    setSearchResult(result.data.results);
    history.push("/search");

    setValue("search", "");
  };
  useEffect(() => {
    openSearch === true && setFocus("search");
  }, [openSearch]);
  return (
    <HeaderWrapper navScroll={navScroll} openSearch={openSearch}>
      <HeaderContainer>
        <HeaderLeft navScroll={navScroll} openSearch={openSearch}>
          <div className="item search">
            <form onSubmit={handleSubmit(onSubmit)}>
              <i
                className="fas fa-search"
                onClick={() => setOpenSearch((prev) => !prev)}
              ></i>
              <input
                {...register("search")}
                placeholder="Enter movies, tv shows..."
              />
              <button type="submit" />
            </form>
          </div>
          <div className="item" onClick={() => history.push("/")}>
            Home
          </div>
          <div className="item" onClick={() => history.push("/movie")}>
            Movies
          </div>
          <div className="item" onClick={() => history.push("/TV/list")}>
            Tv shows
          </div>
          <div className="item" onClick={handleLogOut}>
            Log out
          </div>
        </HeaderLeft>
        <HeaderRight>
          <div className="image" onClick={() => history.push("/")}>
            <img
              src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
              alt="logo"
            />
          </div>
        </HeaderRight>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
