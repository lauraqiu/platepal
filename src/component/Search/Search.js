import React, { useEffect } from "react";
import styles from "./Search.module.scss";
import algoliaLogo from "../../assets/images/algoliaLogo.svg";
import algolia from "../../utilities/algolia/algolia";
import { useState } from "react";
import backBtn from "../../assets/images/arrow.svg";

const Search = (props) => {
  const searchRef = React.createRef();

  const [searchResults, setSearchResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const generateSearchItems = () => {
    return searchResults.map((item) => {
      return (
        <li className={styles.listItem}>
          <span>{item.name}</span>
        </li>
      );
    });
  };

  useEffect(() => {
    try {
      document.getElementById("root").style.overflow = "hidden";
    } catch {}

    return function cleanup() {
      try {
        document.getElementById("root").style.overflow = "visible";
      } catch {}
    };
  });

  const onChangeHandler = (e) => {
    e.preventDefault();
    algolia
      .search(e.target.value, { hitsPerPage: 20, offset: 0, length: 10 })
      .then((res) => {
        setSearchResults(res.hits);
      });
    setSearchInput(e.target.value);
  };

  return (
    <div className={styles.searchContainer} ref={searchRef}>
      <div className={styles.upper}>
        <button
          className={styles.backBtn}
          onClick={() => props.setShowSearch(false)}
        >
          <img src={backBtn} alt={"back"} />
        </button>
        <label className={styles.label}>{props.header}</label>
        <div></div>
      </div>
      <input
        type="search"
        className={styles.searchInput}
        placeholder={"Search items"}
        onChange={(e) => onChangeHandler(e)}
      />
      <ul className={styles.list}>{searchInput && generateSearchItems()}</ul>
      <div className={styles.algoliaLogo}>
        <span>Powered by</span>
        <img src={algoliaLogo} alt="algolia logo" />
      </div>
    </div>
  );
};

export default Search;
