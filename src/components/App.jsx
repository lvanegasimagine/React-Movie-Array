import React, {useState} from "react";
import MoviesGrid from "./MoviesGrid";
import styles from "../module/App.module.css"
const App = () => {


  return (
    <div>
      <header className={styles.title}>
        <h1>Movies</h1>
      </header>
      <main>
      <MoviesGrid/>
      </main>
    </div>
  );
};

export default App;
