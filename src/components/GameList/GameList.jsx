import { useCallback, useEffect, useRef, useState } from "react";
import Game from "../Game/Game";
import "./GameList.css";

function GameList({ isMobile, data, isBottom, setIsBottom }) {
  const [sortedData, setSortedData] = useState([]);
  const [sort, setSort] = useState(0);
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");

  const searchInput = useRef();

  const sortCriterias = [
    "Price Descending",
    "Price Ascending",
    "Name Descending",
    "Name Ascending",
  ];

  const appendFive = useCallback(() => {
    let newList = [...list];
    let n = newList.length - 1;

    for (let i = 1; i < 6; i++)
      if (sortedData[n + i])
        newList.push(
          <Game
            key={sortedData[n + i].id}
            isMobile={isMobile}
            gameInfo={sortedData[n + i]}
          />
        );
      else break;

    setList(newList);
  }, [sortedData, list, isMobile]);

  const sortData = useCallback(() => {
    let newSortedData = [...data];

    if (search !== "") {
      newSortedData = newSortedData.filter((game) => {
        return game.title.toLowerCase().includes(search);
      });
    }

    switch (sort) {
      case 0:
        newSortedData.sort((a, b) => {
          return b.price - a.price;
        });
        break;
      case 1:
        newSortedData.sort((a, b) => {
          return a.price - b.price;
        });
        break;
      case 2:
        newSortedData.sort((a, b) => {
          if (a.title < b.title) return -1;
          if (a.title > b.title) return 1;
          return 0;
        });
        break;
      case 3:
        newSortedData.sort((a, b) => {
          if (b.title < a.title) return -1;
          if (b.title > a.title) return 1;
          return 0;
        });
        break;
      default:
        break;
    }

    let newList = [];
    for (let i = 0; i < 5; i++)
      if (newSortedData[i])
        newList.push(
          <Game key={i} isMobile={isMobile} gameInfo={newSortedData[i]} />
        );
      else break;

    setList(newList);
    setSortedData(newSortedData);
  }, [sort, search, data, isMobile]);

  useEffect(() => {
    if (isBottom) {
      appendFive();
      setIsBottom(!isBottom);
    }
  }, [appendFive, isBottom, setIsBottom]);

  useEffect(() => {
    sortData();
  }, [sortData]);

  function getWeb() {
    return (
      <div className="GameList">
        <div className="NewTrending">
          <div className="Bar" />
          <h1>New & Trending</h1>
          <div className="Bar" />
        </div>
        <div className="Criteria">
          <div className="Search">
            <input
              type="text"
              id="search"
              name="search"
              placeholder="Search"
              ref={searchInput}
              onChange={() => {
                setSearch(searchInput.current.value);
              }}
            />
          </div>
          <div className="Sort">
            <h2>Sort by:</h2>
            <div
              className="Choice"
              onClick={() => {
                let newSort = sort;
                newSort < 3 ? newSort++ : (newSort = 0);
                setSort(newSort);
              }}
            >
              <h2>{sortCriterias[sort]}</h2>
            </div>
          </div>
        </div>
        <div className="List">
          {list.length > 0 ? list : <h1 className="NoGame">No games</h1>}
        </div>
      </div>
    );
  }

  function getMobile() {
    return (
      <div className="GameList">
        <div className="NewTrending">
          <div className="Bar" />
          <h1>New & Trending</h1>
          <div className="Bar" />
        </div>
        <div className="Criteria">
          <div className="Search">
            <input
              type="text"
              id="search"
              name="search"
              placeholder="Search"
              ref={searchInput}
              onChange={() => {
                setSearch(searchInput.current.value);
              }}
            />
          </div>
          <div className="Sort">
            <h2>Sort by:</h2>
            <div
              className="Choice"
              onClick={() => {
                let newSort = sort;
                newSort < 3 ? newSort++ : (newSort = 0);
                setSort(newSort);
              }}
            >
              <h2>{sortCriterias[sort]}</h2>
            </div>
          </div>
        </div>
        <div className="List">
          {list.length > 0 ? list : <h1 className="NoGame">No games</h1>}
        </div>
      </div>
    );
  }

  return isMobile ? getMobile() : getWeb();
}

export default GameList;
