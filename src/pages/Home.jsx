import MovieBox from '../components/MovieBox';
import useFetchMovies from '../utils/useFetchMovies';
function Home() {
const films=useFetchMovies()
  return (
    <div className='home'>
        <h1>Home</h1>
        <div className='box-container'>
        {films.toReversed().map((film)=>{return<MovieBox film={film}/>})}
        </div>
    </div>
  )
}
export default Home