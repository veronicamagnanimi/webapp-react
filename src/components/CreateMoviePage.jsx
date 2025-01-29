import { useState } from "react";

const CreateMoviePage = () => {

    const defaultForm = {
        title: "",
        author: "",
        genre: "",
        release_year: 0,
        abstract: "",
        image: null
    }

    //state
    const [movieData, setMovieData] = useState(defaultForm);

    //function onChange
    const handleInputChange = (event) => {
        const inputName = event.target.name;
        if(inputName === "image") {
            const imageFile = event.target.files[0];
            const newObject = {
                ...movieData, image: imageFile
            };
            setMovieData(newObject)
        } else {
            const value = event.target.value;
            const newObject = {...movieData, [inputName] : value};
            setMovieData(newObject);
        }
    }

    //function submit
    const handleFormSubmit = (event) => {
        event.preventDefault();
        const dataToSend = new FormData();
        for(let key in movieData) {
            dataToSend.append(key, movieData[key])
        }
    }

    return (
        <>
        <h3 className="text-center mt-3">Create Movie</h3>
        <form onSubmit={handleFormSubmit} className="w-25 mt-3 text-center margin-create">
        <div className="mb-4">
          <label htmlFor="title">Title</label>
          <input
            required
            minLength="3"
            type="text"
            className="form-control"
            name="title"
            id="title"
            value={movieData.title}
            onChange={handleInputChange}
            />
        </div>
        <div className="mb-4">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            className="form-control"
            name="author"
            id="author"
            value={movieData.author}
            onChange={handleInputChange}
            />
        </div>
        <div className="mb-4">
          <label htmlFor="genre">Genre</label>
          <input
            type="text"
            className="form-control"
            name="genre"
            id="genre"
            value={movieData.genre}
            onChange={handleInputChange}
            />
        </div>
        <div className="mb-4">
          <label htmlFor="genre">Release Year</label>
          <input
            type="number"
            className="form-control"
            name="year"
            id="year"
            value={movieData.release_year}
            onChange={handleInputChange}
            />
        </div>
        <div className="mb-4">
          <label htmlFor="abstract">Abastract</label>
          <textarea
            className="form-control"
            name="abstract"
            id="abstract"
            value={movieData.abstract}
            onChange={handleInputChange}
           ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="image">Image</label>
          <input
            type="file"
            className="form-control"
            name="image"
            id="image"
            onChange={handleInputChange}
            />
        </div>
        <button className="btn btn-secondary">Add</button>
      </form>
        </>

    )
}


export default CreateMoviePage;