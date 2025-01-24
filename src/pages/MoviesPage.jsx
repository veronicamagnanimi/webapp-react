import axios from "axios";
import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

const MoviesPage = () => {
  //state
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  //api
  const backEndUrl = import.meta.env.VITE_BACKEND_URL;

  //function params + axios
  const getMovies = () => {
    const params = {};
    if (search.length > 0) {
      params.search = search;
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
          <input
            className="form-control w-25 m3"
            type="search"
            placeholder="Keyword"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <button onClick={getMovies} className="btn btn-secondary">Search</button>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
          {movies.map((curItem) => (
            <div className="col" key={curItem.id}><MovieCard movie={curItem} /></div>
          ))}
        </div>
      </section>
      </div>
    </>
  );
};

export default MoviesPage;
