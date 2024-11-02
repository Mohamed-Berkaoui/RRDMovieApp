import React from 'react'
import { Link } from 'react-router-dom'

function MovieBox({ film }) {
  return (
    <div className='box'>
            <img src={film.image} alt="" />
            <h4>{film.title}</h4>
            <p>{film.year}</p>
           <Link to={"/film/"+film.id}> <button>Details</button></Link>
    </div>
  )
}

export default MovieBox