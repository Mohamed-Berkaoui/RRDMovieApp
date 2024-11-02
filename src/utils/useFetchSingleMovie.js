import axios from "axios";
import React, { useEffect, useState } from "react";

function useFetchSingleMovie(id) {
  const [film, setFilm] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:3000/movies/" + id)
      .then(function (response) {
        setFilm(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [id]);
  return film;
}

export default useFetchSingleMovie;
