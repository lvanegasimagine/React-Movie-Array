import React, {useState, useEffect} from 'react';
import styles from '../module/Search.module.css';
import {FaSearch} from "react-icons/fa";
import {useNavigate} from "react-router-dom";
import { useQuery } from '../hooks/UseQuery';

function Search() {

  const query = useQuery();
  const search = query.get("search");

  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setSearchText(search || "");
  }, [search]);
  
  const handleSubmit = (e) => {
    e.preventDefault(); // Previene el submit para q no recarge la pagina de nuevo
    navigate("/?search="+ searchText)
  }

  return (
  <form className={styles.searchContainer} onSubmit={handleSubmit}>
    <div className={styles.searchBox}>
        <input className={styles.searchInput} type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
        <button className={styles.searchButton} type="submit">
          <FaSearch size={20}/>
        </button>
    </div>
  </form>
  );
}

export default Search;
