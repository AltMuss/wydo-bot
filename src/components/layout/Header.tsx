import { NavLink } from 'react-router-dom';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header() {
  return (
    <header className="bg-slate-100">
      <section className="flex items-center justify-between px-6 py-4 w-full">
        {/* left header */}
        <div className="">
          WYDO!
        </div>

        {/* centre: navlinks */}
        <div className="">
          <nav>
            <ul className="flex gap-4">
              <li><NavLink to="/" end>Home</NavLink></li>
              <li><NavLink to="/predict">Predict!</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
            </ul>
          </nav>
        </div>

        {/* right header */}
        <div className="">
          <FontAwesomeIcon icon={faMoon}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faSun}></FontAwesomeIcon>
        </div>
      </section>
    </header>
  )
}

export default Header;
