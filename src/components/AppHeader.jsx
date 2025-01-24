import { NavLink } from "react-router-dom";

const AppHeader = () => {
  const navLinks = [
    {
      path: "/",
      title: "Home",
    },

    {
      path: "/movies",
      title: "Movies",
    },
  ];

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            BoolMovies🎬
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {navLinks.map((curItem, index) => {
                    <li className="nav-item" key={index}>
                        <NavLink className="nav-link" aria-current="page"
                        to={curItem.path}>{curItem.title}</NavLink>
                    </li>
                })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default AppHeader;
