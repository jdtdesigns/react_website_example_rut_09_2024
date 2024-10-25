import {NavLink} from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contact">Contact Me</NavLink>
    </nav>
  )
}

export default Nav;