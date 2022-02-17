import style from "../css/Navbar.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../context/UserContext";

export default function Navbar() {
  const { user } = useContext(userContext);
  return (
    <>
      <header className={style.navbar}>
        <div className={style.navbar__title}>
          <Link to={"/"}>
            <h2>MOVIES</h2>
          </Link>
        </div>
        <nav>
          <ul className={style.navbar__routes}>
          <li className={style.navbar__itemUser}>
              <p>{user.logged ? "Bienvenido " + user.name : "Sin sesión"}</p>
            </li>
            <li className={style.navbar__item}>API</li>
            <li className={style.navbar__item}>Generos</li>

            <li className={style.navbar__item}>
              <Link to={"/login"}>
                <button className={style.navbar__enter}>Iniciar Sesión</button>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className={style.bar}></div>
    </>
  );
}
