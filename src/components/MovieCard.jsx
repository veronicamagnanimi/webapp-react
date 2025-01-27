import { Link } from "react-router-dom";

const MovieCard = ({movie}) => {

    const backEndUrl = import.meta.env.VITE_BACKEND_URL

    return (
        <div className="card h-100 d-flex d-column">
        <img
          src={
            movie.image
              ? `${backEndUrl}/images/${movie.image}`
              : "https://placeholder.pics/svg/300"
          }
          className="card-img-top"
          alt={`Immagine di ${movie.title}`}
        />
        <div className="card-body">
          <h5 className="card-title">
            {movie.title}
            <h6>{movie.genre}</h6>
             <br /> {movie.director}
          </h5>
          <p className="card-text flex-grow-1">{movie.abstract}</p>
          <Link className="btn btn-secondary" to={`/movies/${movie.slug}`}>{" "}Details</Link>
        </div>
      </div>
    )
}


export default MovieCard;