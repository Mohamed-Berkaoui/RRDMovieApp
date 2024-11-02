import { Link, useNavigate, useParams } from "react-router-dom";
import useFetchSingleMovie from "../utils/useFetchSingleMovie";
import axios from "axios";
import { toast } from "react-toastify";
function FilmDetails() {
  const params = useParams();
  const navigate = useNavigate();
    const film=useFetchSingleMovie(params.id)
    function handleDelete(){
      axios.delete("http://localhost:3000/movies/"+params.id)
      .then(function(response){
        console.log(response)
        toast.success("Film deleted successfully")
        navigate('/')
      })
      .catch(function(error){
        console.log(error)
      })}

  return (
    <div>
      <h4>film details </h4>
      <h2>{film.title}</h2>
      <h5>{film.year}</h5>
      <img src={film.image} alt="" />
      <br />
      <button onClick={handleDelete}>delete</button>
      <Link to={"/update/" + film.id}>
        <button>update</button>
      </Link>
    </div>
  );
}

export default FilmDetails;
