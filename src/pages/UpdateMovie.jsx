import React from "react";
import { useParams } from "react-router-dom";
import useFetchSingleMovie from "../utils/useFetchSingleMovie";
import axios from "axios";
import { toast } from "react-toastify";

function UpdateMovie() {
  const params = useParams();
  const film = useFetchSingleMovie(params.id);
  function handleSubmit(e) {
    e.preventDefault();
    const updatedFilm = {
      title: e.target.title.value,
      year: e.target.year.value,
      image: e.target.image.value,
      category: e.target.category.value,
    };
    axios
      .put("http://localhost:3000/movies/" + params.id, updatedFilm)
      .then(function (response) {
        console.log(response);
        toast.success("Film updated successfully");
      })
      .catch(function (error) {
        console.log(error);
        toast.error("An error occurred");
      });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            defaultValue={film.title}
          />
        </div>
        <div>
          <label htmlFor="year">Year</label>
          <input type="text" id="year" name="year" defaultValue={film.year} />
        </div>
        <div>
          <label htmlFor="image">Image</label>
          <input
            type="text"
            id="image"
            name="image"
            defaultValue={film.image}
          />
        </div>
        <div>
          <label htmlFor=""> category</label>
          <select name="category" id="" value={film.category}>
            <option value="">select a category</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Drama">Drama</option>
            <option value="Action">Action</option>
            <option value="Crime">Crime</option>
            <option value="Horror">Horror</option>
          </select>
        </div>
        <button type="submit">Add Film</button>
      </form>
    </div>
  );
}

export default UpdateMovie;
