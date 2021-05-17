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

const Header = (props: { setSearchResult: any }) => {
  const [openSearch, setOpenSearch] = useState(false);
  const { setSearchResult } = props;
  const [navScroll, setNavScroll] = useState(false);
  const [query, setQuery] = useState<string>("");
  const [value, setValue] = useState<string>("");
  const changeNav = () => {
    window.scrollY > 0 ? setNavScroll(true) : setNavScroll(false);
  };
  function useDebounce(callback: any, delay: number) {
    const debouncedFn = useCallback(
      debounce((...args) => callback(...args), delay),
      [delay]
    );
    return debouncedFn;
  }
  const debouncedSave = useDebounce(
    (nextValue: string) => setQuery(nextValue),
    1000
  );
  const handleChange = (event: any) => {
    const nextValue = event.target.value;
    setValue(nextValue);
    debouncedSave(nextValue);
  };
  const searchQuery = async (e: any) => {
    e.preventDefault();
    const result = await axios.get(
      `/search/multi?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    );
    setSearchResult(result.data.results);
    setQuery("");
    setValue("");
    history.push("/search");
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
  return (
    <HeaderWrapper navScroll={navScroll} openSearch={openSearch}>
      <HeaderContainer>
        <HeaderLeft navScroll={navScroll} openSearch={openSearch}>
          <div className="item search">
            <form>
              <i
                className="fas fa-search"
                onClick={() => setOpenSearch((prev) => !prev)}
              ></i>
              <input
                type="text"
                onChange={handleChange}
                value={value}
                placeholder="Enter movies, tv shows... "
              />
              <button onClick={searchQuery} type="submit">
                Search
              </button>
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
