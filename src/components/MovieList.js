import React from 'react'
import MovieItem from './MovieItem'

const MovieList = (props) => {
    return (
        <div>
            <div className="row m-5">
                {
                    props.list.map((film)=>{
                        return <MovieItem title={film.title} ratings={film.ratings} imageUrl={film.imageURL} key={film.id}/>
                    })
                }
            </div>
        </div>
    )

}
export default MovieList