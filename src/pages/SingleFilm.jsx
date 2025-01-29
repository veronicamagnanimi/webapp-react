import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReviewCard from "../components/ReviewCard";
import ReviewForm from "../components/ReviewForm";

const initialValues = {
  name: "",
  text: "",
  vote: 0
}

const SingleFilm = () => {
  const { slug } = useParams();

  //state
  const [singleMovie, setSingleMovie] = useState(null);
  const [formData, setFormData] = useState(initialValues);

  //api
  const backEndUrl = import.meta.env.VITE_BACKEND_URL;

  //function
  const getMovie = () => {
    axios.get(`${backEndUrl}/movies/${slug}`).then((resp) => {
      setSingleMovie(resp.data.data);
    });
  }

   
  const submitReview = (formData) => {
    axios.post(`${backEndUrl}/movies/${singleMovie.id}/reviews`, formData)
      .then((resp) => {
        console.log(resp);
        setFormData(initialValues); 
        getMovie();
      });
  };

  
  
  //use effect
  useEffect(() => {
    getMovie();
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
        <section>
          <div className="row justify-content-center">
            <div className="col-8 my-3 text-center">
              <h4>Write your reviews!</h4>
              <ReviewForm
              formData={formData} setFormData={setFormData} onSubmitFunction={submitReview} />
            </div>
          </div>
        </section>
        </>
    )}
    </>
  )
};

export default SingleFilm;
