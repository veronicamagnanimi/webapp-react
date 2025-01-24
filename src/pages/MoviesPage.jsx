import axios from "axios";
import { useState, useEffect } from "react";

const MoviesPage = () => {

//state
const [movies, setMovies] = useState([]);


//api
const backEndUrl = import.meta.env.VITE_BACKEND_URL

//axios
useEffect(() => {
    axios.get(`${backEndUrl}/movies`).then((resp) => {
        setMovies(resp.data.data);
    });
}, []);




    return (
      <>
      <section><h1>Titolo</h1></section>
      <section> 
      <h2>Movies&apos;s list</h2>
      <ul>
        {movies.map((curItem) => (
            <li key={curItem.id}>{curItem.title}</li>
        ))}
      </ul>
      </section>
      </>
    )
}


export default MoviesPage;