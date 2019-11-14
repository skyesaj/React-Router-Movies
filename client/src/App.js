import React, { useState } from "react";

import MovieList from "./Movies/MovieList";
import SavedList from "./Movies/SavedList";
import Movie from "./Movies/Movie";
import { Route } from "react-router-dom";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  // const addToSavedList = movie => {
  //   setSavedList([...savedList, movie]);
  // };

  return (
    <div>
      <SavedList list={savedList} />
      <div>Replace this Div with your Routes</div>

      <Route
        exact
        path="/"
        render={props => <MovieList {...props} movies={MovieList} />}
      />
      <Route path="/movie/:id" component={Movie} />
    </div>
  );
};

export default App;
