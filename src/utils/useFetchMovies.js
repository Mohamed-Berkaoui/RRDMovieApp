import axios from "axios";
import React, { useEffect, useState } from "react";

function useFetchMovies() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/movies").then(function (response) {
      setFilms(response.data);
    });
  }, []);
  return films;
}

export default useFetchMovies;
