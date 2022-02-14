import style from "../css/Navbar.module.css";
import { Link } from "react-router-dom";

export default function Navbar() {
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
            <li className={style.navbar__item}>API</li>
            <li className={style.navbar__item}>Generos</li>
            <Link to={"/movie/login"}>
              <li className={style.navbar__item}>
                <button className={style.navbar__enter}>Iniciar Sesión</button>
              </li>
            </Link>
            {/* <li className={style.navbar__item}>Buscar</li> */}
          </ul>
        </nav>
      </header>
      <div className={style.bar}></div>
    </>
  );
}
