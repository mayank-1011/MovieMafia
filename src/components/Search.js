import React ,{useState}from 'react'
import './Search.css'



const Search = (props) => {

    const [movie,setMovie] = useState();
const changeHandler = (event)=>{
    setMovie(event.target.value)
}

//on searching the movie
   const movieSearchHandler = (event)=>{
       event.preventDefault();
   
    props.searchMovieHandler(movie)
   }

   //clicking the sort button
   const sortListHandler = ()=>{
       props.sortMovieHandler()
   }

   //clicking add button
   const addMovieHandler = ()=>{
       props.addMovieHandler();
   }

    return (

        <div className="searchClass">
            <form onSubmit={movieSearchHandler}>
                <input type="text" placeholder="Search Film" onChange={changeHandler} required/>
                <button type="submit"><i className="fas fa-search"></i></button>
                <button onClick={addMovieHandler} type="button"><i className="fas fa-plus-circle"></i></button>
                <button onClick={sortListHandler} type="button"><i className="fas fa-sort"></i></button>
            </form>
        </div>
    )}

export default Search