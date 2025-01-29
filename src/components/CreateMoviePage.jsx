const CreateMoviePage = () => {

    return (
        <>
        <h3 className="text-center mt-3">Create Movie</h3>
        <form className="w-25 mt-3 text-center margin-create">
        <div className="mb-4">
          <label htmlFor="title">Title</label>
          <input
            required
            minLength="3"
            type="text"
            className="form-control"
            name="title"
            id="title"
            />
        </div>
        <div className="mb-4">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            className="form-control"
            name="author"
            id="author"
            />
        </div>
        <div className="mb-4">
          <label htmlFor="genre">Genre</label>
          <input
            type="text"
            className="form-control"
            name="genre"
            id="genre"
            />
        </div>
        <div className="mb-4">
          <label htmlFor="genre">Release Year</label>
          <input
            type="number"
            className="form-control"
            name="year"
            id="year"
            />
        </div>
        <div className="mb-4">
          <label htmlFor="abstract">Abastract</label>
          <textarea
            className="form-control"
            name="abstract"
            id="abstract"
           ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="image">Image</label>
          <input
            type="file"
            className="form-control"
            name="image"
            id="image"
            />
        </div>
        <button className="btn btn-secondary">Add</button>
      </form>
        </>

    )
}


export default CreateMoviePage;