import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReviewCard from "../components/ReviewCard";

const SingleFilm = () => {
  const { slug } = useParams();

  //state
  const [singleMovie, setSingleMovie] = useState(null);

  //api
  const backEndUrl = import.meta.env.VITE_BACKEND_URL;
  
  //use effect
  useEffect(() => {
    axios.get(`${backEndUrl}/movies/${slug}`).then((resp) => {
      setSingleMovie(resp.data.data);
    });
  }, []);

  
  return (
    <>
    {singleMovie && (
        <>
        <section className="mt-5 text-center"> 
            <img className="w-25"src={`${backEndUrl}/images/${singleMovie.image}`} alt=""></img>
            <h2 className="font-weight-bold mt-2">{singleMovie.title}</h2> 
            <h4>Genre: {singleMovie.genre}</h4>
            <h5>Director: {singleMovie.director} - {singleMovie.release_year}</h5>
            <p className="font-italic">{singleMovie.abstract}</p>
            <p>Vote: {singleMovie.vote_avg}</p>
        </section>
        <section>
            <div className="row row-cols-1 g-3">
           {singleMovie.reviews.map(curItem => 
            <ReviewCard key={curItem.id} review={curItem} />
           )}
            </div>
        </section>
        </>
    )}
    </>
  )
};

export default SingleFilm;
