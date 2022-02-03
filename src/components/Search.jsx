import React from 'react';
import styles from '../module/Search.module.css';
import {FaSearch} from "react-icons/fa";
import {useNavigate} from "react-router-dom";
import { useQuery } from '../hooks/UseQuery';

function Search() {

  const query = useQuery();
  const search = query.get("search");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Previene el submit para q no recarge la pagina de nuevo
  }

  return (
  <form className={styles.searchContainer} onSubmit={handleSubmit}>
    <div className={styles.searchBox}>
        <input className={styles.searchInput} type="text" placeholder="Title" aria-label="Search Movies" value={search} onChange={(e) => {
          const value = e.target.value;
          navigate("/?search="+ value)
        }}/>
          <FaSearch className={styles.searchButton} color="black" size={20}/>
    </div>
  </form>
  );
}

export default Search;
