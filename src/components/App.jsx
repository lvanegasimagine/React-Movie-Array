import React from "react";
import styles from "../module/App.module.css";
import MoviesGrid from "./MoviesGrid";
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <header className={styles.title}>
        {/* <h1>Movies</h1> */}
        <Link to="/">Home</Link>
        <Link to="/movie">Movie</Link>
      </header>
      <main>
      <Routes>
          <Route path="/movie" element={<MoviesGrid />}></Route>
          <Route path="/">
            Home
          </Route>
      </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
