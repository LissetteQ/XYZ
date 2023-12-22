import React from "react";
import Logo from '../../assets/logo.svg'
import SearchBar from '../SearchBar/SearchBar'
import { Link } from "react-router-dom";

const Navbar = ({ setCategory, searchTerm, setSearchTerm }) => {

  return (
    <div className="bg-white navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52">
            <li>
              <Link to="/"> Categorias</Link>
              <ul className="p-2">
                <li onClick={() => setCategory("general")}><a>General</a></li>
                <li onClick={() => setCategory("technology")}><a>Tecnología</a></li>
                <li onClick={() => setCategory("business")}><a>Negocios</a></li>
                <li onClick={() => setCategory("health")}><a>Salud</a></li>
                <li onClick={() => setCategory("entertainment")}><a>Entretenimiento</a></li>
                <li onClick={() => setCategory("science")}><a>Ciencia</a></li>
                <li onClick={() => setCategory("sports")}><a>Deportes</a></li>

              </ul>
            </li>
            <li><Link to="/library">Mi Colección</Link></li>
          </ul>
        </div>
        <Link to="/">
          <img className='logo' src={Logo} alt="Inicio" />
        </Link>
      </div>

      <div className="hidden navbar-center lg:flex">
        <ul className="z-20 px-1 menu menu-horizontal">
          <li>
            <details>
              <summary> <Link to="/">Categorias</Link> </summary>
              <ul className="p-2">
                <li onClick={() => setCategory("general")}><a>General</a></li>
                <li onClick={() => setCategory("technology")}><a>Tecnología</a></li>
                <li onClick={() => setCategory("business")}><a>Negocios</a></li>
                <li onClick={() => setCategory("health")}><a>Salud</a></li>
                <li onClick={() => setCategory("entertainment")}><a>Entretenimiento</a></li>
                <li onClick={() => setCategory("science")}><a>Ciencia</a></li>
                <li onClick={() => setCategory("sports")}><a>Deportes</a></li>

              </ul>
            </details>
          </li>
          <li><Link to="/library">Mi Colección</Link></li>
        </ul>
      </div>


      <div className="mt-4 lg:ml-auto lg:mt-0 lg:w-96">
        <SearchBar searchTerm={searchTerm} onSearchTermChange={setSearchTerm} onSearchSubmit={() => { }} />
      </div>
    </div>
  )
}

export default Navbar
