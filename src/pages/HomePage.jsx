import { Link } from "react-router-dom";

const HomePage = () => {

    return (
        <>
        <div className="container">
        <section className="my-4 text-center">
            <h1>Welcome to our platform!</h1>
            <p>Here you can write a review about the movies and see the reviews of other users</p>
            <Link to="/movies" className="btn btn-secondary">Watch all movies</Link>
        </section>
        </div>
        </>
    )
}


export default HomePage;