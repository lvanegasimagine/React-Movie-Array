import React, {useState} from "react";
import MoviesGrid from "./MoviesGrid";

const App = () => {


  return (
    <div>
      <header>
        <h1>Movies</h1>
      </header>
      <main>
      <MoviesGrid/>
      </main>
    </div>
  );
};

export default App;
