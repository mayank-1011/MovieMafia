import React from 'react'
import './SearchedMovie.css'

const stars = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },

]

const SearchedMovie = (props) => {
    var star_child;

    //for printing the ratings as stars
    if (props.movie.length !== 0) {
        star_child = stars.map((star, index) => {
            if (index < props.movie[0].ratings)
                return <i className="fas fa-star orange"></i>
            else
                return <i className="fas fa-star gray"></i>
        })
    }

    //when movie not found
    const not_found = (
        <div className="movie_class">
            <p>Movie Not Found</p>
        </div>
    )

    //when found
    const found = (
        props.movie.length === 0 ? <div></div> :
            <div className="movie_class">
                <h4 style={{fontFamily: " Kaisei HarunoUmi, serif",textDecoration:"underline",color:"red"}}>About </h4>
                <div className="srch_image">
                    <img className="d-block w-100" src={props.movie[0].imageURL} alt="Not Available"></img>
                </div>
                <div className="srch_des " >
                    <p >{props.movie[0].title}</p>
                    <div>{star_child}</div>
                </div>
            </div>
    )

    return (
        <div>
            {
                props.movie.length === 0 ? not_found : found
            }
        </div>
    )

}

export default SearchedMovie