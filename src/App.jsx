import { BrowserRouter, Routes, Route } from "react-router-dom"
import AppLayout from "./layout/AppLayout"
import HomePage from "./pages/HomePage"
import MoviesPage from "./pages/MoviesPage"
import SingleFilm from "./pages/SingleFilm"
import CreateMoviePage from "./components/CreateMoviePage"

function App() {
 

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:slug" element={<SingleFilm />} />
        <Route path="/movies/create" element={<CreateMoviePage />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
