import axios from "axios";
import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

const MoviesPage = () => {
  const genres = ["Science Fiction", "Crime", "Romance", "Action"];
  const years = [1972, 1997, 1999, 2010, 2014];

  //state
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");

  //api
  const backEndUrl = import.meta.env.VITE_BACKEND_URL;

  //function params + axios
  const getMovies = () => {
    const params = {};
    if (search.length > 0) {
      params.search = search;
    }

    if (genre !== "") {
      params.genre = genre
    }

    if (year !== "") {
      params.release_year = year
    }

    axios.get(`${backEndUrl}/movies`, { params }).then((resp) => {
      setMovies(resp.data.data);
    });
  };

  //use effect
  useEffect(() => {
    getMovies();
  }, []);


  return (
    <>
    <div className="container2">
      <section className="text-center">
        <h1 className="my-3">All movies</h1>
      </section>
      <section className="text-center">
        <p>Choose movies using the filter too</p>
        <div className="my-4 d-flex">
          {/* Filtro per genere */}
          <select className="border border-secondary text-secondary m3" name="" id="" value={genre} onChange={(event) => setGenre(event.target.value)}>
            <option value="">Genre</option>
            {genres.map((curItem, index) => (
              <option key={index} value={curItem}>{curItem}</option>
            ))}
          </select>
          {/* Filtro per anno */}
          <select className="m3 border border-secondary text-secondary" name="" id="" value={year} onChange={(event) => setYear(event.target.value)}>
            <option value="">Year</option>
            {years.map((curItem, index) => (
              <option key={index} value={curItem}>{curItem}</option>
            ))}
          </select>
          {/* Campo di ricerca */}
          <input
            className="form-control border border-secondary text-secondary w-25 m3"
            type="search"
            placeholder="Keyword"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <button onClick={getMovies} className="btn btn-secondary">Search</button>
        </div>
        {movies.length > 0 ? (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
          {movies.map((curItem) => (
            <div className="col" key={curItem.id}><MovieCard movie={curItem} /></div>
          ))}
        </div>
        ) : (
            <div className="alert alert-warning">
              Non abbiamo trovato nulla. Riprova
            </div>
          )}
      </section>
      </div>
    </>
  );
};

export default MoviesPage;
