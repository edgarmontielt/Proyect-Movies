import { Link } from "react-router-dom";
import styles from "../css/Login.module.css"

export default function Login() {

  return (
    <div className={styles.login_container}>
      <h4>Iniciar Sesión</h4>
      <p>¿No tienes cuenta?, <Link to="/registro"><span>Registrate Aquí</span></Link></p>
      <form action="" className={styles.form_container}>
          <input type="email" placeholder="Email"/>
          <input type="password"  placeholder="Contraseña"/>
          <button type="button">Ingresar</button>
      </form>
    </div>
  );
}
