import { useContext } from "react";
import { userContext } from "../context/UserContext";
import styles from "../css/SignUp.module.css";

export default function Register() {
  const { setUser } = useContext(userContext);

  const signUp = (event) => {
    event.preventDefault();
    const { firstName, lastName, email, city, password } = event.target;

    console.log(
      firstName.value,
      lastName.value,
      email.value,
      city.value,
      password.value
    );

    fetch("https://backendtzuzulcode.wl.r.appspot.com/auth/signup", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        city: city.value,
        password: password.value,
      }),
    })
      .then((res) => res.json())
      .then((user) => {
        console.log(user);
        setUser({ logged: true, name: user.data.firstName });
      })
      .catch((error) => setUser({ logged: false }));
  };

  return (
    <div className={styles.login_container}>
      <h4>Registro de Usuarios</h4>
      <p>¡Ingresa para commenzar a disfrutar!</p>
      <form className={styles.form_container} onSubmit={signUp}>
        <input type="text" placeholder="Nombre" name="firstName" />
        <input type="text" placeholder="Apellidos" name="lastName" />
        <input type="email" placeholder="Email" name="email" />
        <input type="text" placeholder="Ciudad" name="city" />
        <input type="password" placeholder="Contraseña" name="password" />
        <button>Registrar</button>
      </form>
    </div>
  );
}
