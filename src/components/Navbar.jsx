import style from "../css/Navbar.module.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <header className={style.navbar__title}>
        <div>
          <Link to={"/"}>
            <h1>Movies</h1>
          </Link>
        </div>
        <nav>
          <ul className={style.navbar__routes}>
            <li className={style.navbar__item}>API</li>
            <li className={style.navbar__item}>Generos</li>
            <li className={style.navbar__item}>
              <button className={style.navbar__enter}>Ingresar</button>
            </li>
            {/* <li className={style.navbar__item}>Buscar</li> */}
          </ul>
        </nav>
      </header>
      <div className={style.bar}></div>
    </>
  );
}
