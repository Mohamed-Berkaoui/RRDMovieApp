import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function AddFilmForm() {
  
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const newFilm = {
      title: e.target.title.value,
      year:  e.target.year.value,
      image: e.target.image.value,
      category: e.target.category.value,
    };
    axios.post("http://localhost:3000/movies", newFilm)
    .then(function(response){
      toast.success("Film added successfully");
      navigate('/')
    })
    .catch(function(error){
      toast.error("An error occurred");
      console.log(error);
    });

  }

  return (
    <form  onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title"/>
      </div>
      <div>
        <label htmlFor="year">Year</label>
        <input type="text" id="year" name="year"/>
      </div>
      <div>
        <label htmlFor="image">Image</label>
        <input type="text" id="image" name="image"/>
      </div>
      <div>
        <label htmlFor=""> category</label>
        <select name="category" id="" >
          <option value="" defaultChecked>
            select a category
          </option>
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
  );
}

export default AddFilmForm;
