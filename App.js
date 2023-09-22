import logo from './logo.svg';
import './App.css';
import {useState} from "react"

function App() {
  return (
    <div className="App">
      <Movie />
     
    </div>
  );
}

function Movie(){

    const movie=  
  {
  name: "The Avengers",
  rating: 8,
  summary:
  "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
  poster:
  "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
  
  };


  return(
    <div className="movie-container">
       
      <img className="movie-poster"src={movie.poster} />
      <div className="movie-specs">
      <h2  className="movie-name">{movie.name}</h2>
      <p  className="movie-rating">{movie.rating}⭐</p>
      <p  className="movie-summary">{movie.summary}</p>
      </div>
      <Counter />
    </div>
  )
}


function Counter(){
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);
  return(
  
      <div>
      <button  onClick={() =>setLike(like+1)} > 👍 {like} </button>

      <button  onClick={() =>setDisLike(dislike+1)} > 👎 {dislike}</button>
    </div>
  )
}


export default App;
