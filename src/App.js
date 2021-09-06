import React, { useEffect, useState } from "react";
import Search from '../src/components/Search'
import MovieList from "../src/components/MovieList";
import Backdrop from "../src/components/BackDrop";
import AddModal from "../src/components/AddModal";
import SearchedMovie from "../src/components/SearchedMovie";

//dummy movies
const temp_list = [
  {
    title: "The ShawShank Redemption",
    ratings: 1,
    imageURL: "https://i.pinimg.com/originals/d1/3a/d5/d13ad50397ecbb4144d6a714846d0415.png",
    id: Math.random().toString(),
  },
  {
    title: "InterStellar",
    ratings: 2,
    imageURL: "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fblogs-images.forbes.com%2Fscottmendelson%2Ffiles%2F2014%2F10%2F2v00kg8.jpg",
    id: Math.random().toString(),
  },
  {
    title: "Inception",
    ratings: 3,
    imageURL: "https://cdn.pastemagazine.com/www/system/images/photo_albums/best-movie-posters-2016/large/moonlight-ver2-xlg.jpg?1384968217",
    id: Math.random().toString(),
  },
  {
    title: "Martian",
    ratings: 4,
    imageURL: "https://m.media-amazon.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgwODA3OTI4NjE@._V1_.jpg",
    id: Math.random().toString(),
  },
  {
    title: "HarryPotter",
    ratings: 5,
    imageURL: "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_QL75_UX190_CR0,2,190,281_.jpg",
    id: Math.random().toString(),
  }
]


const App = () => {

  const [movieList, setmovieList] = useState(temp_list);
  const [addMovie, setAddMovie] = useState(false);
  const [searchMovie, setSearchMovie] = useState(false)
  const [foundedMovie, setFoundedMovie] = useState(null);


  useEffect(() => {
    const temp = JSON.parse(localStorage.getItem("my_movies"));

    if (temp != null)
      setmovieList([...temp]);


  }, []);

  //when ready for adding movie
  const addMovieHandler = () => {
    setAddMovie(true)

    console.log(searchMovie);
    console.log(addMovie)

  }

  //for sorting
  const sortMovieHandler = () => {
    const temp_list = [...movieList];
    temp_list.sort((a, b) => {
      return b.ratings - a.ratings;
    })

    setmovieList((prev) => {
      return [
        ...temp_list
      ]
    })
  }
  const backDropHandler = () => {
    setAddMovie(false)
    setSearchMovie(false);
  }

  //new movie submitted
  const movieSubmitHandler = (movie) => {
    var tmp = [];
    if (movieList === null) {
      tmp = [...movie];
      setmovieList([...tmp]);
    }
    else {
      tmp = [...movieList, movie];
      setmovieList((prevState) => {
        return [
          ...prevState,
          movie,
        ]
      })
    }
    window.localStorage.setItem('my_movies', JSON.stringify(tmp));
    backDropHandler();
  }


  //movie search handler
  const searchMovieHandler = (title) => {
    const searchedMovie = movieList.filter((movie) => {
      return movie.title.toLocaleLowerCase() === title.toLocaleLowerCase()
    })
    console.log(searchedMovie)
    if (searchedMovie != null)
      setFoundedMovie([...searchedMovie]);
    setSearchMovie(true);
  }


  const addMovieModal = (
    <div style={{ textAlign: "center" }}>
      <Backdrop onClick={backDropHandler} />
      <AddModal onSubmitHandler={movieSubmitHandler} />
    </div>

  )


  return (

    <div style={{ textAlign: "center" }}>
      {addMovie ? addMovieModal : <div />}
      {searchMovie ? <div>
        <Backdrop onClick={backDropHandler} />
        <SearchedMovie movie={foundedMovie} />
      </div>
        : <div />}
      <h1 style={{ textAlign: "center", fontStyle: "italic", textDecoration: "underline" }}>Movie Mafia</h1>
      <Search addMovieHandler={addMovieHandler} searchMovieHandler={searchMovieHandler} sortMovieHandler={sortMovieHandler} />
      {movieList.length !== 0 ? <MovieList list={movieList} /> : <div />}
    </div>
  )

}

export default App
