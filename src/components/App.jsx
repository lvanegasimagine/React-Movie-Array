import React from "react";
import styles from "../module/App.module.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import MovieDetails from "../pages/MovieDetails";
import LandingPage from "../pages/LandingPage";

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Link to="/"><h1 className={styles.title}>Movies</h1></Link>
      </header>
      <main>
        <Routes>
          <Route exact path="/movies/:movieId" element={<MovieDetails />}></Route>
          <Route exact path="/" element={<LandingPage />}>Home</Route>
          <Route path="/">404</Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
