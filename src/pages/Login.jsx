import { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../context/UserContext";
import styles from "../css/Login.module.css"

export default function Login() {

  const { setUser} = useContext(userContext)

  const signIn = (event) => {
    event.preventDefault()
    const {email,password} = event.target

    console.log(email.value,password.value)
    fetch("https://backendtzuzulcode.wl.r.appspot.com/auth/login",{
        method:"POST",
        credentials:'include',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            email:email.value,
            password:password.value
        })
    }).then(res=>res.json())
    .then(user=>{
        console.log(user)
        setUser({logged:true,name:user.data.firstName})
    }).catch(error=>setUser({logged:false}))
}

  return (
    <div className={styles.login_container}>
      <h4>Iniciar Sesión</h4>
      <p>¿No tienes cuenta?, <Link to="/signup"><span>Crea una aquí</span></Link></p>
      <form className={styles.form_container} onSubmit={signIn}  >
          <input type="email" placeholder="Email" name="email"/>
          <input type="password"  placeholder="Contraseña" name="password"/>
          <button>Ingresar</button>
      </form>
    </div>
  );
}
