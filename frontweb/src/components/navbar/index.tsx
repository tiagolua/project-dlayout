import './styles.css';
import 'bootstrap/js/src/collapse';
import '@popperjs/core'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-primary ">
      <div className="container-fluid">
        <a href="link" className="nav-text">
          <h4> Carros Top</h4>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#carrostop-navbar"
          aria-controls="carrostop-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" ></span>
        </button>

        <div className="collapse navbar-collapse" id="carrostop-navbar">
          <ul className="navbar-nav offset-md-2 main-menu-ul">
            <li>
              <a className="main-menu-home" href="link">
                Home
              </a>
            </li>
            <li>
              <a href="link">Catálogo</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
