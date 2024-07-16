import { NavLink } from "react-router-dom";
import "../styles/Menu.css"

function Menu() {
  return (
    <div id="Menu">
     
      <nav>
        <ul>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/farmers">Farmers</NavLink>
          </li>
          <li>
            <NavLink to="/farmlands">Farmlands</NavLink>
          </li>
          <li>
            <NavLink to="/crop cylces">Crop cycles</NavLink>
          </li>
          <li>
            <NavLink to="/account">Accounts</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;